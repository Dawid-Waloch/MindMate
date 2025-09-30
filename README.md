
# MindMate

### A supportive chatbot + mindfulness tool
A lightweight MVP designed to help users in difficult moments — through simple breathing exercises, mood tracking, and instant access to help resources.

### Demo & Video
> 🎬 Coming soon: a 3-minute demo video showcasing chat, breathing animation, streak, and SOS mode.

### MVP Features
- **Chat (AI buddy)** – Users can type, bot replies in a supportive tone.  
- **Breathing / Mindfulness exercise** – Animated circle expanding/contracting with “Inhale / Exhale.”  
- **SOS / Help mode** – One tap → hotlines and support numbers (e.g. 116 123 + international).  
- **Streaks** – Counter of consecutive days with mood entries, small badge as motivation.  

### Tech stack & architecture
| Layer / Component   | Tech / Approach                      | Notes                                                     |
| ------------------- | ------------------------------------ | --------------------------------------------------------- |
| Frontend (UI)       | React (web)                          | TailwindCSS for fast styling                              |
| Chatbot logic       | OpenAI API                           | GPT-4o-mini                                               |
| Breathing animation | React component + CSS                | Expanding/contracting circle                              |
| Backend-less option | localStorage                         | Store journal & streaks                                   |

### Menu / Tab Names
Simple, supportive wording:
- 💬 Chat
- 🔥 Streak
- 🌬️ Breath
- 🚨 Help

### Getting Started
1. **Clone this repo:**
 
    ```bash
    git clone https://github.com/Dawid-Waloch/MindMate.git
    cd MindMate
    ```
    
2. **Install dependencies:**
 
    ```bash
    npm install
    # or yarn install
    ```
    
3. **Run in dev mode:**

    ```bash
    npm run dev
    ```
   
4. **Configure API keys:**

    ```env
    OPENAI_API_KEY=YOUR_OPENAI_API_KEY
    ```

### Team
**MindMate** – hackathon project built by **Dawid Waloch**

### License
```swift
MIT License

Copyright (c) 2025 Dawid Waloch

Permission is hereby granted, free of charge, to any person obtaining a copy...
```
