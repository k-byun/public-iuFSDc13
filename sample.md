<!-- ```mermaid
%% Git Commit History Diagram with Branches, Merging, Forking, and PR

gitGraph
   commit id: "Initial commit"
   branch develop
   commit id: "Develop branch commit 1"
   branch feature
   commit id: "Feature branch commit 1"
   commit id: "Feature branch commit 2"
   checkout develop
   commit id: "Develop branch commit 2"
   merge feature tag: "Merged feature into develop"
   branch hotfix
   commit id: "Hotfix branch commit"
   checkout develop
   merge hotfix tag: "Merged hotfix into develop"
   checkout main
   merge develop tag: "Merged develop into main (PR)"
   commit id: "Main branch final commit"
``` -->

---
<!-- backup -->
<!-- ```mermaid
%% version1- initial draft (About me, to tell the personal story)

gitGraph
   commit id: "Initial commit"
   branch School
   commit id: "DeVry" tag: "EET"
   branch "Work"
   commit id: "Oil & Gas Service" tag: "Computer Engineering Technologist"
   checkout School
   merge "Work"
   commit id: "U of C" tag: "ENEL w/ ENCM"
   checkout "Work"
   merge School id: "Oil & Gas EPCM" tag: "ENEL, E.I.T."
   commit id: " ."
   commit id: "Oil & Gas Automation" tag: "E&I ENEL"
   commit id: "  ."
   commit id: "Asset Management" tag: "SW Analyst"
   checkout School
   merge Work
   commit id: "InceptionU" tag: "Full Stack Developer"
   
``` -->

---
---
---
---


```mermaid
%% version1- initial draft (About me, to tell the personal story)

gitGraph
   commit id: "Initial commit" type: HIGHLIGHT
   
   branch School
   checkout School   
   commit id: "DeVry" tag: "EET"
   
   checkout main
   merge School
   commit id: " ."

   branch Work
   checkout Work
   commit id: "Oil & Gas Service" tag: "Computer Engineering Technologist, C.E.T."
   checkout main
   merge Work

   checkout School
   commit id: "U of C" tag: "ENEL w/ ENCM"

   checkout main
   merge School

   checkout "Work"
   commit id: "Oil & Gas EPCM" tag: "ENEL, E.I.T."
   checkout main
   merge Work

   checkout Work
   commit id: "Commercial Project" tag: "Project Coord"
   checkout main
   merge Work

   checkout Work
   commit id: "Oil & Gas Automation" tag: "E&I ENEL"
   checkout main
   merge Work
   
   checkout Work
   commit id: "Asset Management" tag: "SW Analyst"
   checkout main
   merge Work
   
   checkout School
   commit id: "InceptionU" tag: "FSD"
   checkout main
   commit id: "awaiting merge" type: HIGHLIGHT
   
``` 