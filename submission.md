# Project Submission Report

## 1. Student Details

- **Full Name:** Ryan Gicheru
- **GitHub Username:** Gichezz
- **Email:** ryan.gicheru@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/library-catalogue-162484/

---

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/library-catalogue-162484/commit/8b166c7
- **Why this one?** This commit demonstrates clean Conventional Commit practice by using the `feat` type and a concise, descriptive subject. It also represents a meaningful functional addition to the application by persisting borrowing status using browser localStorage.

### B. A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/library-catalogue-162484/commit/08f063c
- **What happened and how did you recover?** During the merge-conflict exercise, I encountered a modify/delete conflict where one branch deleted `css/style.css` while another branch modified it. The conflict required me to determine which version should be retained rather than relying on Git's automatic merge. I resolved the conflict, staged the result, and committed the clean merge.

### C. A Pull Request You're Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/library-catalogue-162484/pull/31
- **What did you check before merging?** I reviewed the README changes to confirm that the project description, features, technologies, usage instructions, Git workflow information, and live GitHub Pages deployment information were accurate and complete. I also verified that the PR targeted `main` and was linked to Issue #14.

### D. One Thing You Would Do Differently

- **What would you change?** I would establish and verify the correct `main` branch before creating the first feature branch. This would have avoided the initial unrelated commit histories between `main` and `feat/1-project-structure` and made the first pull request workflow smoother.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/library-catalogue-162484/commit/09eadfc

---

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues

<img width="1880" height="670" alt="image" src="https://github.com/user-attachments/assets/4da463ed-0658-4657-b988-3dba64e0ba75" />

* **Caption:** The milestones track the development of BookNest from its initial structure and catalogue features through borrowing functionality, responsive design, testing, documentation, and deployment.

### B. Project Board

<img width="1810" height="919" alt="image" src="https://github.com/user-attachments/assets/8459b72a-e26e-4ece-92bc-0d790da5e8f1" />

* **Caption:** The Kanban project board was used to track development tasks as they progressed through the project workflow, with issues moving between stages as work was completed.

### C. Branching Architecture

<img width="1065" height="525" alt="image" src="https://github.com/user-attachments/assets/120d9796-8637-449f-b410-691e4b938c47" />

* **Caption:** The branch history shows the issue-linked `feat/`, `fix/`, `style/`, `docs/`, and `conflict/` branches used to isolate development work before merging changes into `main`.

### D. Pull Requests & Traceability

<img width="1855" height="914" alt="image" src="https://github.com/user-attachments/assets/2c40a85e-74ba-44f2-910e-072c7d7ffb9c" />

* **Caption:** PR #31 demonstrates pull-request traceability by linking the `docs/14-project-readme` branch to `main` and using `Fixes #14` to connect the pull request to its corresponding issue.

---

## 5. Merge Conflict Evidence

Three merge conflicts were intentionally engineered using three different causes and were resolved successfully before being merged into `main`.

---

### Conflict 1 — Full Chronology

**What cause did you use?** Concurrent modification of overlapping content.

#### Step 1: Generating the Clash

<img width="784" height="131" alt="image" src="https://github.com/user-attachments/assets/cfad9071-e551-4ba7-ad0c-d91659b3fff2" />

* **Caption:** The `conflict/1-homepage` and `conflict/1-navigation` branches modified overlapping homepage content, causing Git to report a merge conflict.

#### Step 2: Inside the Code Editor (Conflict Markers)

<img width="770" height="156" alt="image" src="https://github.com/user-attachments/assets/9c115f9c-bc47-49f5-8e8f-60323d64156e" />

* **Caption:** Git marked the competing homepage changes with conflict markers. The changes from both branches were reviewed and the appropriate final homepage content was selected.

#### Step 3: Resolution & Clean Merge

<img width="1849" height="919" alt="image" src="https://github.com/user-attachments/assets/11d4a602-b9f9-46be-8cad-4253048a8775" />

* **Caption:** The homepage conflict was resolved in commit `f82f394`, after which the conflict branch was successfully merged into `main`.

**Resolution Commit:**
https://github.com/IS-PROJECT-2026/library-catalogue-162484/commit/f82f394

---

### Conflict 2 — Different Cause

**What cause did you use?** Modify/delete conflict.

**Why does this cause trigger a conflict?** A modify/delete conflict occurs when one branch deletes a file while another branch modifies that same file. Git cannot automatically determine whether the file should be deleted or retained with the modifications, so manual resolution is required.

<img width="925" height="250" alt="image" src="https://github.com/user-attachments/assets/f210e70a-a3b7-47b3-a240-83db8bfb613d" />

* **Caption:** The `conflict/2-css-update` and `conflict/2-css-delete` branches conflicted because `css/style.css` was modified on one branch and deleted on the other.

**Resolution Commit:**
https://github.com/IS-PROJECT-2026/library-catalogue-162484/commit/08f063c

---

### Conflict 3 — Different Cause

**What cause did you use?** Both branches independently created the same file with different content.

**Why does this cause trigger a conflict?** The two branches independently created `docs/catalogue-notes.md`, but each branch gave the file different content. Git could not automatically determine which newly created version should be kept, so the conflicting versions had to be resolved manually.

<img width="727" height="197" alt="image" src="https://github.com/user-attachments/assets/d37dd416-a9e6-4357-aaff-9afeb5571cc2" />

* **Caption:** The `conflict/3-catalogue-notes` and `conflict/3-filter-notes` branches independently created `docs/catalogue-notes.md` with different content, producing a conflict that required manual resolution.

**Resolution Commit:**
https://github.com/IS-PROJECT-2026/library-catalogue-162484/commit/16cc8de

---
