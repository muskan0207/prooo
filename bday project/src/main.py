import streamlit as st
import time

# --- 1. SET THE PAGE TO LOAD AT THE TOP ---
st.set_page_config(page_title="Happy Birthday!", initial_sidebar_state="collapsed")

# --- 2. LOAD EXTERNAL CSS ---
with open('streamlit_styles.css') as f:
    st.markdown(f'<style>{f.read()}</style>', unsafe_allow_html=True)

# --- 3. LOAD MUSIC SAFELY ---
audio_bytes = None
try:
    with open('../assets/music.mp3.mpeg', 'rb') as f:
        audio_bytes = f.read()
    st.sidebar.success("✅ Music file found and loaded!") # Temporary check
except FileNotFoundError:
    st.sidebar.warning("❌ Still looking for music.mp3 in the folder...")

# --- 4. FLOATING ICONS ---
icons = ["💖", "🦋", "✨", "🌸", "💕"]
for i in range(15):
    st.markdown(f'<div class="floating-icon" style="left:{i*7}%; animation-delay:{i*0.8}s;">{icons[i%5]}</div>', unsafe_allow_html=True)

# --- 5. PAGE 1: THE WELCOME ---
st.markdown("<br><br>", unsafe_allow_html=True)
title_placeholder = st.empty()
full_title = "Happy Birthday, beautiful! 💕"
current_title = ""

for char in full_title:
    current_title += char
    title_placeholder.markdown(f"<h1 style='text-align: center; color: #be185d;'>{current_title}</h1>", unsafe_allow_html=True)
    time.sleep(0.08)

st.markdown("<p style='text-align: center; font-size: 1.2rem;'>Today is all about celebrating you and the joy you bring to my life.</p>", unsafe_allow_html=True)

# --- 6. THE CELEBRATION TRIGGER ---
if st.button("Start the Celebration 💖"):
    if audio_bytes:
        # Removing 'autoplay' for a second to see if the player shows up
        st.audio(audio_bytes, format='audio/mp3') 
    st.balloons()

    # GALLERY SECTION (Appears below button)
    st.divider()
    st.markdown("<h2 style='text-align: center; color: #9d174d;'>📸 Our Beautiful Memories</h2>", unsafe_allow_html=True)

    col1, col2, col3 = st.columns(3)
    with col1:
        st.image("../assets/photo1.jpg", caption="You're not old baby girl", use_container_width=True)
        st.image("../assets/photo4.jpg", caption="My heart chose you", use_container_width=True)
    with col2:
        st.image("../assets/photo2.jpg", caption="today I gave you my ashirwad", use_container_width=True)
        st.image("../assets/photo5.jpg", caption="keep growing, keep smiling", use_container_width=True)
    with col3:
        st.image("../assets/photo3.jpg", caption="to the one who make a day brighter", use_container_width=True)
        st.image("../assets/photo6.jpg", caption="you and i make Hilarious moments", use_container_width=True)

    # FINAL MESSAGE SECTION
    st.divider()
    st.success("### A Special Message For You")
    st.write("""
    Happy Birthday to the most beautiful soul. You make my world brighter 
    just by being in it. Thank you for every laugh and every memory.
    """)
    st.markdown("<p style='text-align: center; font-style: italic; color: #be185d;'>Happy Birthday, my love! 💖🌸✨</p>", unsafe_allow_html=True)