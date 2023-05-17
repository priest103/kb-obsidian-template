# Obsidian as Knowledge base

## Hint

- The whole setup is performed in a manner of supporting `GitHub` rendering.

## Setup

**Basic prerequisites:**

1. Install Obsidian;
2. Install `git` CLI;
3. Create a new `GitHub` repo;
4. Clone the repo to the desired location on your hard drive;
5. Add `.gitignore` file with `.obsidian/workspace.json`:
    - This is needed in order to `git` sync working without any conflicts while having the vault open on multiple devices;
6. Open the repo folder as an Obsidian vault;
7. Tweak the general settings (below are my default personal preference for a change):
    - Spellcheck - turned off by default:
      
        ![](../../../attachments/Pasted%20image%2020230412195647.png)
    
    - Indentation - tabs by default:
      
        ![](../../../attachments/Pasted%20image%2020230412195705.png)
    
    - Default location for new notes - vault folder by default:
      
        ![](../../../attachments/Pasted%20image%2020230412201455.png)
    
    - Default location for new attachments - vault folder by default:
    
        ![](../../../attachments/Pasted%20image%2020230412202325.png)
    
    - Show inline title - turned on by default:
    
        ![](../../../attachments/Pasted%20image%2020230511231624.png)

**Knowledge base setup:**

1. Tweak the general settings required for correct `GitHub` rendering:
    - New link format - shortest path by default:
      
        ![](../../../attachments/Pasted%20image%2020230412201904.png)
    
    - Use `[[Wikilinks]]` - on by default:
    
        ![](../../../attachments/Pasted%20image%2020230412202152.png)
    
2. Install and setup the community plugins:
    - Every plugin installed has to be enabled manually;
    - [Obsidian Git](obsidian://show-plugin?id=obsidian-git):
        - Vault backup interval:
          
            ![](../../../attachments/Pasted%20image%2020230511232536.png)
        
        - Auto backup after latest commit:
          
            ![](../../../attachments/Pasted%20image%2020230511232607.png)
        
        - Auto pull interval:
          
            ![](../../../attachments/Pasted%20image%2020230511232626.png)
        
        - Pull updates on startup:
          
            ![](../../../attachments/Pasted%20image%2020230511232653.png)
        
        - Disable notifications:
          
            ![](../../../attachments/Pasted%20image%2020230511232715.png)
        
        - Show stage / unstage button:
          
            ![](../../../attachments/Pasted%20image%2020230511232749.png)
        
        - Show changes files count in status bar:
          
            ![](../../../attachments/Pasted%20image%2020230511232841.png)
    
    - [Obsidian Emoji Shortcodes](obsidian://show-plugin?id=emoji-shortcodes);
    - [Draw.io diagram plugin for Obsidian.md](obsidian://show-plugin?id=drawio-obsidian):
        - Theme:
          
            ![](../../../attachments/Pasted%20image%2020230511235233.png)
        
    - [Folder Note Core](obsidian://show-plugin?id=folder-note-core) & [AidenLx's Folder Note](obsidian://show-plugin?id=alx-folder-note):
        - Note file storage strategy:
          
            ![](../../../attachments/Pasted%20image%2020230511234737.png)
        
        - Name for index file:
          
            ![](../../../attachments/Pasted%20image%2020230511234825.png)
        
    - [CustomJS](obsidian://show-plugin?id=customjs) & [Text expand](obsidian://show-plugin?id=mrj-text-expand):
        - Folder:
          
            ![](../../../attachments/Pasted%20image%2020230512000303.png)
        
        - Line ending:
          
            ![](../../../attachments/Pasted%20image%2020230512000435.png)
        
        - Exclude current file:
          
            ![](../../../attachments/Pasted%20image%2020230512000456.png)

## Recipes in use

**Making use of templates:**

- Obsidian has an internal templates mechanism, which can be extremely useful when you have any kind of a pattern with your notes;
- Setup a templates folder *(Core plugins -> Templates)*:
    
    ![](../../../attachments/Pasted%20image%2020230412204140.png)
    
- Example of such a pattern you can see in this repo - how I prefer to structure my notes in KB is described in Readme.