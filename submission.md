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

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/library-catalogue-162484/commit/8b166c7
- **Why this one?** This commit demonstrates clean Conventional Commit practice by using the `feat` type and a concise, descriptive subject. It also represents a meaningful functional addition to the application by persisting borrowing status using browser localStorage.

### B. A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/library-catalogue-162484/commit/08f063c
- **What happened and how did you recover?** A merge conflict occurred when one branch deleted `css/style.css` while another branch had modified the same stylesheet. Git reported a modify/delete conflict, so I inspected the conflicting changes, chose the appropriate version, staged the resolution, and committed the clean resolution.

### C. A Pull Request You're Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/library-catalogue-162484/pull/31
- **What did you check before merging?** I reviewed the README changes to confirm that the project description, features, technologies, usage instructions, Git workflow information, and live GitHub Pages deployment information were accurate and complete. I also verified that the PR targeted `main` and was linked to Issue #14.

### D. One Thing You Would Do Differently

- **What would you change?** I would establish and verify the correct `main` branch before creating the first feature branch. This would have avoided the initial unrelated commit histories between `main` and `feat/1-project-structure` and made the first pull request workflow smoother.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/library-catalogue-162484/commit/09eadfc

---

## 4. Screenshots of Key GitHub Features

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues

[PASTE YOUR MILESTONE SCREENSHOT DIRECTLY HERE]

* **Caption:** The project milestones divide development into meaningful phases, with individual issues assigned to milestones to provide granular task tracking throughout development.

### B. Project Board

[PASTE YOUR PROJECT BOARD SCREENSHOT DIRECTLY HERE]

* **Caption:** The Kanban project board was used to track development tasks as they progressed through the project workflow, with issues moving between stages as work was completed.

### C. Branching Architecture

[PASTE YOUR BRANCHING SCREENSHOT DIRECTLY HERE]

* **Caption:** The branch list demonstrates the use of issue-linked branch naming conventions including `feat/`, `fix/`, `style/`, `docs/`, and `conflict/` branches.

### D. Pull Requests & Traceability

[PASTE YOUR PULL REQUEST SCREENSHOT DIRECTLY HERE]

* **Caption:** PR #31 demonstrates pull-request traceability by linking the `docs/14-project-readme` branch to `main` and using `Fixes #14` to connect the pull request to its corresponding issue.

---

## 5. Merge Conflict Evidence

Three merge conflicts were intentionally engineered using three different causes and were resolved successfully before being merged into `main`.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** Concurrent modification of overlapping content.

#### Step 1: Generating the Clash

[PASTE SCREENSHOT OF ATTEMPTED MERGE / TERMINAL WARNING HERE]

* **Caption:** The `conflict/1-homepage` and `conflict/1-navigation` branches modified overlapping homepage content, causing Git to report a merge conflict.

#### Step 2: Inside the Code Editor (Conflict Markers)

[PASTE SCREENSHOT OF RAW CONFLICT MARKERS HERE]

* **Caption:** Git marked the competing homepage changes with conflict markers. The changes from both branches were reviewed and the appropriate final homepage content was selected.

#### Step 3: Resolution & Clean Merge

[PASTE SCREENSHOT OF CLEAN RESOLUTION HERE]

* **Caption:** The homepage conflict was resolved in commit `f82f394`, after which the conflict branch was successfully merged into `main`.

**Resolution Commit:**
https://github.com/IS-PROJECT-2026/library-catalogue-162484/commit/f82f394

---

### Conflict 2 — Different Cause

**What cause did you use?** Modify/delete conflict.

**Why does this cause trigger a conflict?** A modify/delete conflict occurs when one branch deletes a file while another branch modifies that same file. Git cannot automatically determine whether the file should be deleted or retained with the modifications, so manual resolution is required.

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 2 HERE]

* **Caption:** The `conflict/2-css-update` and `conflict/2-css-delete` branches conflicted because `css/style.css` was modified on one branch and deleted on the other.

**Resolution Commit:**
https://github.com/IS-PROJECT-2026/library-catalogue-162484/commit/08f063c

---

### Conflict 3 — Different Cause

**What cause did you use?** Both branches independently created the same file with different content.

**Why does this cause trigger a conflict?** The two branches independently created `docs/catalogue-notes.md`, but each branch gave the file different content. Git could not automatically determine which newly created version should be kept, so the conflicting versions had to be resolved manually.

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 3 HERE]

* **Caption:** The `conflict/3-catalogue-notes` and `conflict/3-filter-notes` branches independently created `docs/catalogue-notes.md` with different content, producing a conflict that required manual resolution.

**Resolution Commit Link:**
https://github.com/IS-PROJECT-2026/library-catalogue-162484/commit/16cc8de

---