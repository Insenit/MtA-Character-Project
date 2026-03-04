# MtA Character Sheet Website - Project Outline

## 1. Project Overview
A web application that allows Mage: The Awakening players to create, edit, and manage character sheets online with real-time collaboration features.

---

## 2. Core Features

### 2.1 Character Creation
- **Quick Start Wizard**: Step-by-step character creation process
- **Attributes**: Mental, Physical, Social
- **Skills**: Specialized skill categories
- **Arcana**: Dot allocation for (Death, Fate, Forces, Life, Matter, Mind, Prime, Space, Spirit, Time)
- **Rotes**: Spell library management
- **Merits & Flaws**: Customizable trait selection
- **Background Information**: Story, personality, connections

### 2.2 Character Editing
- **Sheet Customization**: Modify any character attribute in real-time
- **Drag-and-drop UI**: Intuitive arrangement of sheet sections
- **Version History**: Track changes and ability to revert
- **Auto-save**: Prevent loss of work

### 2.3 Character Viewing
- **Public/Private Sharing**: Control who can view characters
- **PDF Export**: Download printable character sheets
- **Mobile View**: Optimized viewing on different devices
- **Quick Reference Cards**: Condensed view for gameplay

### 2.4 Account Management
- **User Profiles**: Player information and settings
- **Character Library**: Organized collection of created characters
- **Favorites**: Mark frequently used characters
- **Import/Export**: JSON or custom format files

---

## 3. Technical Architecture

### 3.1 Frontend
- **Framework**: React/Vue/Svelte (or vanilla + components)
- **State Management**: Redux/Pinia/Zustand
- **Styling**: Tailwind CSS / Material UI
- **Form Handling**: React Hook Form / Formik
- **Real-time Updates**: WebSocket or polling

### 3.2 Backend
- **Runtime**: Node.js / Python / .NET
- **API Framework**: Express / FastAPI / ASP.NET
- **Authentication**: JWT tokens / OAuth
- **Database**: PostgreSQL / MongoDB
- **Real-time**: Socket.io (for collaborative editing)

### 3.3 Database Schema (Core entities)
```
Users
├── id (UUID)
├── username
├── email
├── password_hash
├── created_at
└── updated_at

Characters
├── id (UUID)
├── user_id (FK)
├── name
├── concept
├── chronicle
├── created_at
├── updated_at
└── content (JSON: attributes, skills, arcana, etc.)

CharacterVersions
├── id (UUID)
├── character_id (FK)
├── version_number
├── snapshot (JSON)
├── changed_by
└── created_at

SharedCharacters
├── id (UUID)
├── character_id (FK)
├── shared_with_user_id (FK)
├── permission_level (view/edit/comment)
└── created_at
```

---

## 4. Project Structure

```
MtA-Character-Project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CharacterSheet/
│   │   │   ├── Attributes/
│   │   │   ├── Skills/
│   │   │   ├── Arcana/
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Dashboard/
│   │   │   ├── CharacterCreate/
│   │   │   ├── CharacterEdit/
│   │   │   └── ...
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── auth.js
│   │   │   └── character.js
│   │   ├── store/          (state management)
│   │   └── App.jsx
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── characters.js
│   │   │   └── users.js
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── server.js
│   ├── database/
│   │   └── migrations/
│   └── package.json
│
├── docs/
│   ├── API_DOCUMENTATION.md
│   ├── MTA_RULES_REFERENCE.md
│   └── DATABASE_SCHEMA.md
│
└── README.md
```

---

## 5. Implementation Phases

### Phase 1: Foundation (Weeks 1-2)
- [ ] Project setup (frontend + backend scaffolding)
- [ ] User authentication system
- [ ] Database setup and migrations
- [ ] Basic UI layout and navigation

### Phase 2: Core Functionality (Weeks 3-4)
- [ ] Character creation form
- [ ] Character sheet display
- [ ] Attributes and Skills input
- [ ] Save/Load functionality

### Phase 3: Advanced Features (Weeks 5-6)
- [ ] Arcana management
- [ ] Rotes/Spells management
- [ ] Version history
- [ ] Character sharing

### Phase 4: Polish & Deploy (Week 7+)
- [ ] PDF export
- [ ] Mobile responsiveness
- [ ] Performance optimization
- [ ] Deployment setup

---

## 6. Key Technical Decisions Needed

1. **Authentication**: Local user accounts vs. OAuth (Google, Discord)?
2. **Hosting**: Self-hosted, Vercel, Netlify, AWS?
3. **Real-time Collaboration**: Required or optional?
4. **Offline Support**: Progressive Web App (PWA) needed?
5. **Mobile**: Web-only or native app?

---

## 7. Dependencies & Resources

- **MtA Rules Reference**: Document core mechanics for validation
- **Character Sheet Template**: Define standard fields and layout
- **Permissions System**: Plan sharing and collaborative editing rules
- **API Documentation**: Plan and document all endpoints

---

## 8. Success Criteria

✓ Users can create fully-formed Mage: The Awakening characters  
✓ Characters can be edited and changes persist  
✓ Users can share characters with others  
✓ PDF export works cleanly  
✓ Mobile-friendly interface  
✓ Fast load times and smooth interactions  

---

## Next Steps

1. Choose your tech stack
2. Set up project repositories and development environments
3. Create detailed wireframes/mockups for character sheet UI
4. Begin Phase 1 implementation