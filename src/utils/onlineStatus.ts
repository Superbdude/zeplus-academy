// Online status tracking for admin users
interface OnlineStatus {
  userId: string
  lastSeen: string
  isOnline: boolean
}

const ONLINE_USERS_KEY = 'zeplus_online_users'
const HEARTBEAT_INTERVAL = 5000 // 5 seconds
const OFFLINE_THRESHOLD = 15000 // 15 seconds - user is offline if no heartbeat

// Set user as online
export const setUserOnline = (userId: string) => {
  const onlineUsers = getOnlineUsers()
  const existingIndex = onlineUsers.findIndex(u => u.userId === userId)
  
  const status: OnlineStatus = {
    userId,
    lastSeen: new Date().toISOString(),
    isOnline: true
  }

  if (existingIndex >= 0) {
    onlineUsers[existingIndex] = status
  } else {
    onlineUsers.push(status)
  }

  localStorage.setItem(ONLINE_USERS_KEY, JSON.stringify(onlineUsers))
  window.dispatchEvent(new Event('zeplus:online_status'))
}

// Set user as offline
export const setUserOffline = (userId: string) => {
  const onlineUsers = getOnlineUsers()
  const updatedUsers = onlineUsers.filter(u => u.userId !== userId)
  localStorage.setItem(ONLINE_USERS_KEY, JSON.stringify(updatedUsers))
  window.dispatchEvent(new Event('zeplus:online_status'))
}

// Get all online users
export const getOnlineUsers = (): OnlineStatus[] => {
  try {
    const data = localStorage.getItem(ONLINE_USERS_KEY)
    if (!data) return []
    
    const users: OnlineStatus[] = JSON.parse(data)
    const now = new Date().getTime()
    
    // Filter out users who haven't sent heartbeat recently
    const activeUsers = users.filter(u => {
      const lastSeen = new Date(u.lastSeen).getTime()
      return (now - lastSeen) < OFFLINE_THRESHOLD
    })
    
    // Update storage if we filtered any out
    if (activeUsers.length !== users.length) {
      localStorage.setItem(ONLINE_USERS_KEY, JSON.stringify(activeUsers))
    }
    
    return activeUsers
  } catch (err) {
    console.error('Error fetching online users:', err)
    return []
  }
}

// Check if specific user is online
export const isUserOnline = (userId: string): boolean => {
  const onlineUsers = getOnlineUsers()
  const user = onlineUsers.find(u => u.userId === userId)
  
  if (!user) return false
  
  const now = new Date().getTime()
  const lastSeen = new Date(user.lastSeen).getTime()
  
  return (now - lastSeen) < OFFLINE_THRESHOLD
}

// Start heartbeat for current user
export const startHeartbeat = (userId: string): () => void => {
  // Set initial online status
  setUserOnline(userId)
  
  // Set up interval to update heartbeat
  const interval = setInterval(() => {
    setUserOnline(userId)
  }, HEARTBEAT_INTERVAL)
  
  // Set up beforeunload to mark user offline
  const handleBeforeUnload = () => {
    setUserOffline(userId)
  }
  
  window.addEventListener('beforeunload', handleBeforeUnload)
  
  // Return cleanup function
  return () => {
    clearInterval(interval)
    window.removeEventListener('beforeunload', handleBeforeUnload)
    setUserOffline(userId)
  }
}

// Get last seen time for user
export const getLastSeen = (userId: string): string | null => {
  const onlineUsers = getOnlineUsers()
  const user = onlineUsers.find(u => u.userId === userId)
  return user ? user.lastSeen : null
}
