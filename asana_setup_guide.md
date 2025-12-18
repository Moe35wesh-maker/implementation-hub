# Asana Setup Guide: Customer Implementation Tracking

## Overview
This guide will help you set up Asana to track customer implementations with better visualization and workflow management than your current Smartsheet setup.

---

## Structure: Portfolio → Projects → Tasks

### Portfolio Setup: "Customer Implementations"

**Purpose**: Bird's-eye view of all customer implementation projects

**How to Create**:
1. Click "+" in left sidebar → Portfolio
2. Name: "Customer Implementations Portfolio"
3. Add custom fields at portfolio level:
   - Implementation Type (Dropdown: Onboarding, Migration, Integration, Expansion)
   - Customer Tier (Dropdown: Enterprise, Mid-Market, SMB)
   - ARR (Number field)
   - Industry (Dropdown: Healthcare, Finance, Technology, Manufacturing, Retail)
   - Health Status (Dropdown: 🟢 On Track, 🟡 At Risk, 🔴 Blocked, ⚫ Not Started)

---

## Project Template: "Customer Implementation [Template]"

Create this template once, then duplicate for each new customer.

### Project Structure

#### **Section 1: 📋 Project Setup & Kickoff**
Tasks:
- [ ] Initial discovery call completed
  - Assignee: Account Manager
  - Due: +3 days from project start
  - Dependencies: None
  - Custom Fields:
    - Status: Not Started
    - Priority: High
    - Phase: Discovery
  
- [ ] Kickoff meeting scheduled
  - Assignee: Implementation Manager
  - Due: +5 days from project start
  - Dependencies: Discovery call
  - Subtasks:
    - [ ] Send calendar invite with agenda
    - [ ] Prepare kickoff deck
    - [ ] Confirm customer stakeholders

- [ ] Customer environment assessment
  - Assignee: Technical Lead
  - Due: +7 days from project start
  - Description template:
    ```
    **Assessment Checklist:**
    - [ ] Systems inventory
    - [ ] Integration requirements
    - [ ] Security requirements
    - [ ] Data migration needs
    - [ ] Technical constraints
    ```

- [ ] Implementation plan finalized
  - Assignee: Implementation Manager
  - Due: +10 days from project start
  - Attachments: Link to detailed plan document

#### **Section 2: 🏗️ Configuration & Setup**
Tasks:
- [ ] Base system configuration
  - Assignee: Implementation Specialist
  - Due: +15 days from project start
  - Priority: High
  - Subtasks:
    - [ ] Admin accounts created
    - [ ] Security settings configured
    - [ ] User roles defined
    - [ ] Branding applied
    - [ ] Notification settings configured

- [ ] Integration development
  - Assignee: Technical Lead
  - Due: +20 days from project start
  - Priority: High
  - Subtasks:
    - [ ] API credentials obtained
    - [ ] Integration endpoints configured
    - [ ] Data mapping completed
    - [ ] Error handling implemented
    - [ ] Testing protocols defined

- [ ] Custom workflows configured
  - Assignee: Implementation Specialist
  - Due: +18 days from project start

- [ ] Data migration planning
  - Assignee: Data Specialist
  - Due: +20 days from project start

#### **Section 3: 📊 Data Migration**
Tasks:
- [ ] Data extraction from legacy system
  - Assignee: Data Specialist
  - Due: +25 days from project start
  - Priority: High

- [ ] Data transformation & cleansing
  - Assignee: Data Specialist
  - Due: +28 days from project start

- [ ] Test data migration (sandbox)
  - Assignee: Data Specialist + QA
  - Due: +30 days from project start
  - Approval required: Yes

- [ ] Production data migration
  - Assignee: Data Specialist
  - Due: +40 days from project start
  - Dependencies: UAT complete
  - Priority: Critical

#### **Section 4: 🧪 Testing & UAT**
Tasks:
- [ ] Internal QA testing
  - Assignee: QA Lead
  - Due: +32 days from project start
  - Subtasks:
    - [ ] Functional testing
    - [ ] Integration testing
    - [ ] Performance testing
    - [ ] Security testing
    - [ ] UAT test scripts prepared

- [ ] UAT session 1
  - Assignee: Implementation Manager
  - Due: +35 days from project start
  - Collaborators: Customer Success Manager

- [ ] UAT defect resolution
  - Assignee: Technical Lead
  - Due: +38 days from project start

- [ ] UAT sign-off
  - Assignee: Implementation Manager
  - Due: +40 days from project start
  - Approval required: Yes

#### **Section 5: 🚀 Go-Live Preparation**
Tasks:
- [ ] Go-live checklist completed
  - Assignee: Implementation Manager
  - Due: +42 days from project start
  - Subtasks:
    - [ ] All configurations verified
    - [ ] Integrations tested in production
    - [ ] User accounts created
    - [ ] Training completed
    - [ ] Support runbook prepared
    - [ ] Rollback plan documented

- [ ] End-user training sessions
  - Assignee: Training Lead
  - Due: +43 days from project start
  - Subtasks:
    - [ ] Admin training
    - [ ] Power user training
    - [ ] End user training
    - [ ] Training materials delivered

- [ ] Go-live communication sent
  - Assignee: Customer Success Manager
  - Due: +44 days from project start

- [ ] Go-live execution
  - Assignee: Implementation Manager
  - Due: +45 days from project start
  - Priority: Critical

#### **Section 6: ✅ Post Go-Live**
Tasks:
- [ ] Day 1 health check
  - Assignee: Technical Lead
  - Due: +46 days from project start

- [ ] Week 1 check-in meeting
  - Assignee: Customer Success Manager
  - Due: +52 days from project start

- [ ] 30-day review
  - Assignee: Customer Success Manager
  - Due: +75 days from project start

- [ ] Project retrospective
  - Assignee: Implementation Manager
  - Due: +80 days from project start

- [ ] Handoff to Customer Success
  - Assignee: Implementation Manager
  - Due: +90 days from project start

#### **Section 7: 🚨 Blockers & Issues**
- This section remains empty initially
- Use for capturing ad-hoc blockers as they arise
- Tag with "Blocker" custom field

---

## Custom Fields to Add to Projects

1. **Status** (Dropdown)
   - Not Started (Gray)
   - Planning (Blue)
   - In Progress (Green)
   - On Hold (Yellow)
   - At Risk (Orange)
   - Blocked (Red)
   - Complete (Purple)

2. **Priority** (Dropdown)
   - Critical (Red)
   - High (Orange)
   - Medium (Yellow)
   - Low (Gray)

3. **Phase** (Dropdown)
   - Discovery
   - Configuration
   - Data Migration
   - Testing
   - Go-Live
   - Post-Launch

4. **Implementation Type** (Dropdown)
   - New Customer Onboarding
   - System Migration
   - Feature Expansion
   - Integration Project

5. **Assigned Team** (People - Multiple)
   - Implementation Manager
   - Technical Lead
   - Data Specialist
   - QA Lead
   - Training Lead

6. **Customer Contact** (Text)

7. **Go-Live Date** (Date)

8. **Days to Go-Live** (Formula - if available)

---

## Views to Create

### View 1: Timeline (Gantt Chart)
- Click "Timeline" at top of project
- Shows all tasks with dependencies
- Color-code by Phase
- Group by Section

### View 2: Board (Kanban)
- Click "Board" at top of project
- Group by Status
- Shows task cards moving through workflow
- Drag and drop to update status

### View 3: List (Default)
- Sort by Due Date
- Group by Phase
- Filter: Incomplete tasks only

### View 4: Calendar
- Shows all milestones and due dates
- Great for weekly planning

---

## Portfolio-Level Views

### View 1: All Implementations Timeline
- Shows all customer projects on single Gantt
- Color-code by Health Status
- Filter by: Implementation Type, Customer Tier

### View 2: Workload View
- See all team members' capacity
- Filter by date range
- Identify overallocation

### View 3: List View with Custom Fields
**Columns to show:**
- Project Name (Customer)
- Owner (Implementation Manager)
- Status
- Health Status
- Phase
- Go-Live Date
- Days to Go-Live
- Customer Tier

**Sort by**: Go-Live Date (Ascending)

---

## Automations to Set Up

### Rule 1: Task Completion Notification
**Trigger**: Task marked complete
**Action**: Comment on task → "@[Task Creator] This task is complete!"

### Rule 2: Overdue Task Alert
**Trigger**: Task due date passes
**Action**: 
- Add task to "Blockers & Issues" section
- Assign to Project Owner
- Change priority to High

### Rule 3: Go-Live Approaching
**Trigger**: Go-Live Date is 7 days away
**Action**: 
- Post comment on "Go-live execution" task
- Notify Implementation Manager
- Create task: "Final pre-flight check"

### Rule 4: UAT Sign-off Approval
**Trigger**: "UAT sign-off" task marked complete
**Action**:
- Move project phase to "Go-Live"
- Create task: "Schedule go-live date"
- Notify Customer Success Manager

### Rule 5: New Task Assignment
**Trigger**: Task assigned to team member
**Action**: 
- Send email notification
- Add to team member's "My Tasks"

---

## How to Use This System

### For Each New Customer:

1. **Create New Project from Template**
   - Click Portfolio → Add Project → Use Template
   - Name: "[Customer Name] Implementation"
   - Set custom fields:
     - Implementation Type
     - Customer Tier
     - Health Status: Not Started
     - Go-Live Date (target)

2. **Customize Timeline**
   - Adjust task due dates based on customer's go-live target
   - Set dependencies
   - Assign team members

3. **Add to Portfolio**
   - Ensure project appears in "Customer Implementations Portfolio"

4. **Weekly Updates**
   - Update Health Status based on progress
   - Move tasks through Status workflow
   - Add blockers to Blockers section
   - Post status updates in project description

### Daily Workflow:

1. Check "My Tasks" for assignments
2. Update task status as work progresses
3. Add comments for stakeholder updates
4. Mark tasks complete when done
5. Check Portfolio view for cross-project insights

---

## Reporting & Dashboards

### Weekly Status Report
Create a saved search showing:
- All projects with Health Status = At Risk or Blocked
- All overdue tasks
- All tasks due this week

### Executive Dashboard
Use Portfolio custom fields to create dashboard showing:
- Total # of implementations by status
- Implementations by go-live date (next 30/60/90 days)
- Team workload distribution
- At-risk implementations

---

## Tips for Success

1. **Use Dependencies**: Link tasks that must happen in sequence
2. **Template Everything**: Create task templates for recurring patterns
3. **Comment Liberally**: Use comments instead of external emails
4. **Leverage Subtasks**: Break complex tasks into manageable pieces
5. **Set Milestones**: Mark critical dates as milestones for visibility
6. **Use Forms**: Create intake forms for new implementation requests
7. **Mobile App**: Download Asana mobile for on-the-go updates
8. **Integrations**: Connect to Slack for real-time notifications

---

## Sample Implementation: "Acme Corp Enterprise Onboarding"

**Project Details:**
- Customer: Acme Corp
- Implementation Type: New Customer Onboarding
- Customer Tier: Enterprise
- Industry: Healthcare
- ARR: $150,000
- Go-Live Date: March 1, 2026
- Health Status: 🟢 On Track

**Team:**
- Implementation Manager: Sarah Chen
- Technical Lead: David Franklin
- Data Specialist: Maria Rodriguez
- QA Lead: James Kim
- Customer Success Manager: Lisa Thompson

**Current Status:**
- Phase: Configuration
- 15 tasks complete
- 22 tasks remaining
- 0 blockers
- Next milestone: UAT Session 1 (Jan 15, 2026)

---

## Migration Path from Smartsheet

1. **Export from Smartsheet**: Download as Excel
2. **Import to Asana**: 
   - Use CSV import feature
   - Map columns to Asana custom fields
3. **Clean Up**: Review and organize into sections
4. **Set Dependencies**: Add task relationships
5. **Add Team**: Invite stakeholders and assign roles
6. **Go Live**: Start using Asana for daily updates

---

## Need Help?

- Asana Help Center: https://asana.com/guide
- Video Tutorials: https://asana.com/guide/videos
- Templates Library: Browse Asana's template gallery
- Support: help@asana.com
