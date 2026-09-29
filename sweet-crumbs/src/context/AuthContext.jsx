import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('sweetcrumbs_currentUser');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        localStorage.removeItem('sweetcrumbs_currentUser');
      }
    }
  }, []);

  const getUsers = () => {
    try {
      const saved = localStorage.getItem('sweetcrumbs_users');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  };

  const saveUsers = (users) => {
    localStorage.setItem('sweetcrumbs_users', JSON.stringify(users));
  };

  const login = (username) => {
    const trimmed = username.trim();
    if (!trimmed) return { success: false, error: 'Please enter a username.' };
    if (trimmed.length < 3)
      return { success: false, error: 'Username must be at least 3 characters.' };

    const users = getUsers();
    const found = users.find(
      (u) => u.username.toLowerCase() === trimmed.toLowerCase()
    );
    if (found) {
      setUser(found);
      localStorage.setItem('sweetcrumbs_currentUser', JSON.stringify(found));
      return { success: true };
    }
    return {
      success: false,
      error: 'User not found. Please register first.',
    };
  };

  const register = (username) => {
    const trimmed = username.trim();
    if (!trimmed) return { success: false, error: 'Please enter a username.' };
    if (trimmed.length < 3)
      return { success: false, error: 'Username must be at least 3 characters.' };
    if (!/^[a-zA-Z0-9_]+$/.test(trimmed))
      return {
        success: false,
        error: 'Username can only contain letters, numbers, and underscores.',
      };

    const users = getUsers();
    if (users.find((u) => u.username.toLowerCase() === trimmed.toLowerCase())) {
      return { success: false, error: 'Username already taken.' };
    }

    const newUser = {
      username: trimmed,
      displayName: trimmed,
      bio: '',
      phone: '',
      joinDate: new Date().toISOString(),
    };
    users.push(newUser);
    saveUsers(users);
    setUser(newUser);
    localStorage.setItem('sweetcrumbs_currentUser', JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sweetcrumbs_currentUser');
  };

  const updateProfile = (updates) => {
    const updated = { ...user, ...updates };
    setUser(updated);
    localStorage.setItem('sweetcrumbs_currentUser', JSON.stringify(updated));
    const users = getUsers();
    const idx = users.findIndex((u) => u.username === user.username);
    if (idx >= 0) {
      users[idx] = updated;
      saveUsers(users);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn: !!user, login, register, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}

export { AuthContext };
