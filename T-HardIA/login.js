import { supabase } from './supabaseClient.js'

// LOGIN
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    alert(error.message)
  } else {
    alert("¡Login exitoso!")
    window.location.href = "index.html"
  }
})

// SIGNUP
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = document.getElementById('signup-email').value
  const password = document.getElementById('signup-password').value

  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) {
    alert(error.message)
  } else {
    alert("¡Revisa tu correo para confirmar tu cuenta!")
  }
})
