# Monday.com Setup Guide: Customer Implementation Tracking

## Overview
This guide provides a complete Monday.com setup for tracking customer implementations with superior visual management and automation.

---

## Workspace Structure

**Workspace Name**: "Customer Implementations"

Contains:
- Board 1: Customer Implementations Master
- Board 2: Implementation Tasks (connected)
- Board 3: Team Capacity Tracker
- Dashboard: Executive Implementation Dashboard

---

## BOARD 1: Customer Implementations Master

### Purpose
High-level tracking of each customer implementation project

### Columns Setup

#### 1. **Customer Name** (Text)
- Primary identifier
- Example: "Acme Corp", "TechStart Inc", "GlobalBank"

#### 2. **Implementation Type** (Status)
Options with colors:
- 🟦 New Onboarding (Blue)
- 🟩 Migration (Green)
- 🟨 Integration (Yellow)
- 🟪 Expansion (Purple)

#### 3. **Customer Tier** (Status)
Options:
- 💎 Enterprise (Purple)
- 🏢 Mid-Market (Blue)
- 🏪 SMB (Green)

#### 4. **Industry** (Dropdown)
Options:
- Healthcare
- Financial Services
- Technology
- Manufacturing
- Retail
- Education
- Government

#### 5. **ARR** (Numbers)
- Format: Currency ($)
- Example: $150,000

#### 6. **Account Manager** (People)
- Assign account owner
- Shows profile photo

#### 7. **Implementation Manager** (People)
- Primary implementation lead

#### 8. **Technical Lead** (People)
- Technical point person

#### 9. **Status** (Status)
Options with colors:
- ⚪ Not Started (Gray)
- 🔵 Planning (Blue)
- 🟢 In Progress (Green)
- 🟡 UAT (Yellow)
- 🟣 Go-Live Ready (Purple)
- ✅ Complete (Green with check)
- 🔴 Blocked (Red)
- ⏸️ On Hold (Orange)

#### 10. **Health** (Status)
Options:
- 🟢 On Track (Green)
- 🟡 At Risk (Yellow)
- 🔴 Critical (Red)
- ⚫ Not Started (Gray)

#### 11. **Phase** (Status)
Options:
- 🔍 Discovery (Light Blue)
- ⚙️ Configuration (Blue)
- 📊 Data Migration (Purple)
- 🧪 Testing (Orange)
- 🚀 Go-Live (Green)
- ✅ Post-Launch (Dark Green)

#### 12. **Start Date** (Date)
- Project kickoff date

#### 13. **Target Go-Live** (Date)
- Planned go-live date
- Highlighted in timeline view

#### 14. **Actual Go-Live** (Date)
- Actual completion date

#### 15. **Days to Go-Live** (Formula)
Formula: `IF({Actual Go-Live}="",DAYS({Target Go-Live},TODAY()),"Complete")`
- Shows countdown
- Negative = overdue

#### 16. **Progress** (Progress Tracking)
- Shows completion percentage
- Updates based on connected tasks

#### 17. **Task Count** (Mirror from Tasks board)
- Shows total # of tasks
- Auto-populated from connected board

#### 18. **Open Issues** (Numbers)
- Manual entry or mirror
- Tracks blockers/risks

#### 19. **Last Update** (Last Updated)
- Auto-populated
- Shows when row was last modified

#### 20. **Notes** (Long Text)
- Rich text field
- For detailed project notes

#### 21. **Files** (File)
- Attach documents
- SOWs, contracts, technical specs

#### 22. **Connected Tasks** (Connect Boards)
- Links to Implementation Tasks board
- Shows related task items

---

### Groups (Sections) for Board 1

Group boards by Status for easy visualization:

- **📋 Not Started** - Gray
- **🔵 Planning** - Blue
- **🟢 Active Implementations** - Green
- **🟡 In UAT** - Yellow
- **🚀 Ready for Go-Live** - Purple
- **🚨 Blocked/At Risk** - Red
- **✅ Completed** - Dark Green

---

### Sample Data for Board 1

| Customer Name | Type | Tier | ARR | Impl. Manager | Status | Health | Phase | Days to Go-Live |
|---------------|------|------|-----|---------------|--------|--------|-------|-----------------|
| Acme Corp | New Onboarding | Enterprise | $150,000 | Sarah Chen | In Progress | 🟢 On Track | Configuration | 45 |
| TechStart Inc | Integration | Mid-Market | $75,000 | David Franklin | UAT | 🟡 At Risk | Testing | 15 |
| GlobalBank | Migration | Enterprise | $200,000 | Maria Rodriguez | Planning | 🟢 On Track | Discovery | 90 |
| RetailCo | Expansion | SMB | $25,000 | James Kim | In Progress | 🟢 On Track | Configuration | 30 |
| HealthPlus | New Onboarding | Mid-Market | $100,000 | Sarah Chen | Blocked | 🔴 Critical | Data Migration | -5 |

---

## BOARD 2: Implementation Tasks (Detailed)

### Purpose
Granular task tracking for each implementation project

### Columns Setup

#### 1. **Task Name** (Text)
- Descriptive task name
- Example: "Complete kickoff meeting", "Configure admin settings"

#### 2. **Customer** (Connect Boards)
- Links to Customer Implementations Master board
- Shows which customer this task belongs to

#### 3. **Customer Name** (Mirror)
- Mirrors customer name from connected board
- For easy filtering and grouping

#### 4. **Task Type** (Status)
Options:
- 📞 Meeting (Purple)
- ⚙️ Configuration (Blue)
- 📊 Data Work (Orange)
- 🧪 Testing (Yellow)
- 📝 Documentation (Gray)
- ✅ Approval (Green)
- 🎓 Training (Light Blue)

#### 5. **Status** (Status)
Options:
- ⚪ Not Started (Gray)
- 🔵 In Progress (Blue)
- ⏸️ Waiting (Yellow)
- ✅ Complete (Green)
- 🔴 Blocked (Red)

#### 6. **Priority** (Status)
Options:
- 🔴 Critical (Red)
- 🟠 High (Orange)
- 🟡 Medium (Yellow)
- 🟢 Low (Green)

#### 7. **Assignee** (People)
- Who's responsible
- Can assign multiple people

#### 8. **Due Date** (Date)
- Task deadline
- Color-codes when overdue

#### 9. **Estimated Hours** (Numbers)
- Time estimate

#### 10. **Actual Hours** (Numbers)
- Time actually spent

#### 11. **Dependencies** (Dependency)
- Links tasks that must complete first
- Shows on timeline view

#### 12. **Phase** (Status)
- Mirrors from customer board
- Groups tasks by implementation phase

#### 13. **Checklist** (Checklist)
- Sub-items within task
- Example:
  - ☐ Send meeting invite
  - ☐ Prepare agenda
  - ☐ Conduct meeting
  - ☐ Send follow-up

#### 14. **Files** (File)
- Task-related documents

#### 15. **Last Updated** (Last Updated)
- Auto-populated

---

### Groups for Board 2

Group by Phase:
- **🔍 Discovery**
- **⚙️ Configuration**
- **📊 Data Migration**
- **🧪 Testing**
- **🚀 Go-Live**
- **✅ Post-Launch**

OR Group by Customer (using connected board groups)

---

### Sample Task Template per Customer

**Discovery Phase:**
- [ ] Schedule kickoff meeting
- [ ] Conduct discovery call
- [ ] Document customer requirements
- [ ] Complete environment assessment
- [ ] Finalize implementation plan

**Configuration Phase:**
- [ ] Create admin accounts
- [ ] Configure security settings
- [ ] Set up user roles
- [ ] Apply branding
- [ ] Configure integrations
- [ ] Build custom workflows
- [ ] Set up notification rules

**Data Migration Phase:**
- [ ] Extract data from legacy system
- [ ] Cleanse and transform data
- [ ] Perform test migration
- [ ] Validate data accuracy
- [ ] Execute production migration

**Testing Phase:**
- [ ] Conduct internal QA testing
- [ ] Prepare UAT environment
- [ ] Schedule UAT sessions
- [ ] Document test results
- [ ] Resolve defects
- [ ] Obtain UAT sign-off

**Go-Live Phase:**
- [ ] Complete pre-flight checklist
- [ ] Conduct user training
- [ ] Send go-live communication
- [ ] Execute go-live
- [ ] Monitor day 1 performance

**Post-Launch Phase:**
- [ ] Day 1 health check
- [ ] Week 1 check-in
- [ ] 30-day review
- [ ] Project retrospective
- [ ] Handoff to Customer Success

---

## BOARD 3: Team Capacity Tracker

### Purpose
Track team member workload across all implementations

### Columns Setup

#### 1. **Team Member** (Text)
- Name

#### 2. **Role** (Status)
Options:
- Implementation Manager
- Technical Lead
- Data Specialist
- QA Lead
- Training Lead
- Customer Success Manager

#### 3. **Current Implementations** (Numbers)
- Count of active projects

#### 4. **Total Estimated Hours** (Numbers)
- Sum from tasks board

#### 5. **Available Capacity** (Formula)
- Formula: `40 - {Total Estimated Hours}`
- Shows weekly capacity remaining

#### 6. **Utilization %** (Formula)
- Formula: `({Total Estimated Hours} / 40) * 100`
- Color-coded:
  - Green: 0-80%
  - Yellow: 81-100%
  - Red: >100%

#### 7. **Implementations** (Connect Boards)
- Links to Customer Implementations Master
- Shows which projects they're on

#### 8. **Tasks This Week** (Mirror)
- Shows upcoming tasks

---

## DASHBOARD: Executive Implementation Dashboard

### Widgets to Add

#### 1. **Chart: Implementations by Status** (Pie Chart)
- Source: Customer Implementations Master
- Group by: Status
- Shows distribution

#### 2. **Chart: Implementations by Health** (Battery Widget)
- Source: Customer Implementations Master
- Group by: Health
- Visual health scorecard

#### 3. **Chart: Implementations Timeline** (Timeline Widget)
- Source: Customer Implementations Master
- Shows all projects on Gantt
- Color by Health

#### 4. **Number Widget: Active Implementations**
- Source: Customer Implementations Master
- Filter: Status = In Progress
- Shows count

#### 5. **Number Widget: At-Risk Projects**
- Source: Customer Implementations Master
- Filter: Health = At Risk or Critical
- Shows count (red alert)

#### 6. **Chart: Go-Lives by Month** (Column Chart)
- Source: Customer Implementations Master
- X-axis: Target Go-Live (by month)
- Y-axis: Count
- Shows upcoming go-live volume

#### 7. **Table: Next 30 Days Go-Lives**
- Source: Customer Implementations Master
- Filter: Days to Go-Live ≤ 30 AND Status ≠ Complete
- Shows: Customer Name, Go-Live Date, Health, Implementation Manager

#### 8. **Chart: Team Utilization** (Column Chart)
- Source: Team Capacity Tracker
- X-axis: Team Member
- Y-axis: Utilization %
- Color-coded by threshold

#### 9. **Table: Blocked/At-Risk Implementations**
- Source: Customer Implementations Master
- Filter: Status = Blocked OR Health = Critical
- Shows: Customer, Issue, Owner, Days Overdue

#### 10. **Chart: Implementation Types** (Donut Chart)
- Source: Customer Implementations Master
- Group by: Implementation Type

#### 11. **Number Widget: Total ARR in Flight**
- Source: Customer Implementations Master
- Sum: ARR
- Filter: Status ≠ Complete

#### 12. **Chart: Completion Progress** (Progress Widget)
- Source: Customer Implementations Master
- Shows average completion % across all active projects

---

## Automations to Set Up

### Automation 1: Task Completion Notification
**When**: Status changes to Complete
**Then**: Notify Implementation Manager with update

### Automation 2: Overdue Task Alert
**When**: Due Date arrives AND Status ≠ Complete
**Then**: 
- Change Status to Blocked
- Change Priority to Critical
- Notify assignee and manager
- Add to "Blockers" board (if created)

### Automation 3: Health Status Alert
**When**: Health changes to At Risk or Critical
**Then**:
- Notify Account Manager and Implementation Manager
- Create item in "Management Attention" board
- Send Slack notification

### Automation 4: Go-Live Approaching
**When**: Days to Go-Live reaches 7
**Then**:
- Send notification to entire implementation team
- Create reminder task: "Pre-flight checklist"
- Post update in project updates

### Automation 5: New Implementation Kickoff
**When**: New item created in Customer Implementations Master
**Then**:
- Create connected items in Tasks board (using template)
- Assign to Implementation Manager
- Send welcome email to customer
- Create Slack channel (if integrated)

### Automation 6: Weekly Status Update Reminder
**When**: Every Monday at 9am
**Then**:
- Notify all Implementation Managers
- Request status update on their active projects

### Automation 7: Dependency Alert
**When**: Dependent task is marked complete
**Then**:
- Notify assignee of blocked task
- Change blocked task status to "In Progress"

### Automation 8: Capacity Overload Warning
**When**: Team member's Utilization % exceeds 100%
**Then**:
- Notify team lead
- Create item in "Resource Planning" board

### Automation 9: Customer Phase Transition
**When**: Phase changes
**Then**:
- Post update with milestone achieved
- Create next phase checklist items
- Notify relevant stakeholders

### Automation 10: Data Export for Reporting
**When**: Every Friday at 5pm
**Then**:
- Export board to Excel
- Send to leadership team
- Archive in Google Drive

---

## Views to Create

### View 1: Main Table (Default)
- Shows all columns
- Group by: Status
- Sort by: Target Go-Live Date

### View 2: Kanban Board
- Group by: Status
- Shows: Customer Name, Health, Implementation Manager, Days to Go-Live
- Drag and drop to update status

### View 3: Timeline (Gantt)
- Shows all implementations on timeline
- Start: Start Date
- End: Target Go-Live
- Color by: Health
- Dependencies visible

### View 4: Calendar
- Shows all go-live dates
- Color by: Implementation Type
- Monthly view

### View 5: My Implementations (Filtered)
- Filter: Implementation Manager = Current User
- Shows only your projects

### View 6: At-Risk Dashboard
- Filter: Health = At Risk OR Critical
- Sort by: Days to Go-Live (ascending)
- Highlighted

### View 7: Form View (Intake)
- Create intake form for new implementations
- Fields:
  - Customer Name
  - Implementation Type
  - Customer Tier
  - Desired Go-Live Date
  - Key Requirements (long text)
  - Primary Contact
- Submitting form creates new item

### View 8: Chart View
- Shows data visualizations inline
- Implementations by Status (pie chart)
- Go-Lives by Month (bar chart)

---

## Color-Coding Strategy

**Status Colors:**
- Gray: Not Started
- Blue: Planning/In Progress
- Yellow: Caution/UAT/Waiting
- Green: On Track/Complete
- Red: Blocked/Critical
- Purple: Special states (Go-Live Ready)

**Health Colors:**
- 🟢 Green: On Track, no issues
- 🟡 Yellow: Minor issues, watching closely
- 🔴 Red: Major blockers, needs immediate attention

---

## Integrations to Enable

1. **Slack**
   - Get notifications in implementation channels
   - Update board items from Slack
   - Daily digest of tasks

2. **Google Drive**
   - Auto-attach documents
   - Sync folders per customer

3. **Jira** (if using for dev work)
   - Sync technical tasks
   - Two-way updates

4. **Zoom**
   - Schedule meetings from board
   - Attach recordings to tasks

5. **Gmail**
   - Create items from emails
   - Send updates via email

6. **Zapier/Make** (for advanced automations)
   - Connect to CRM
   - Update finance systems
   - Custom workflows

---

## Mobile App Usage

Download Monday.com mobile app for:
- Quick status updates
- Responding to notifications
- Checking upcoming tasks
- Uploading photos/files from meetings
- Updating on the go

---

## Templates to Create

### Template 1: Standard Implementation Project
Pre-populated with all standard tasks across all phases

### Template 2: Quick Integration Project
Streamlined for simple integration projects (fewer tasks)

### Template 3: Enterprise Migration
More detailed tasks for complex migrations

---

## Best Practices

1. **Update Daily**: Spend 5 minutes each morning updating your tasks
2. **Use Comments**: Keep conversations in Monday.com, not email
3. **Attachments**: Always attach relevant docs to items
4. **Dependencies**: Link related tasks to show workflow
5. **Status Updates**: Post weekly updates in items for visibility
6. **Mobile First**: Use mobile app for quick updates
7. **Dashboards**: Check dashboard daily for overall health
8. **Automate Everything**: Let automations handle routine work

---

## Sample Implementation: "Acme Corp Enterprise Onboarding"

**Board 1 Entry:**
- Customer Name: Acme Corp
- Implementation Type: 🟦 New Onboarding
- Customer Tier: 💎 Enterprise
- Industry: Healthcare
- ARR: $150,000
- Account Manager: John Smith
- Implementation Manager: Sarah Chen
- Technical Lead: David Franklin
- Status: 🟢 In Progress
- Health: 🟢 On Track
- Phase: ⚙️ Configuration
- Start Date: Dec 1, 2025
- Target Go-Live: March 1, 2026
- Days to Go-Live: 45
- Progress: 35%
- Task Count: 37 (15 complete, 22 remaining)
- Open Issues: 0

**Board 2 Connected Tasks:** 37 tasks across all phases

**Current Focus:**
- Completing configuration tasks
- Preparing for data migration
- Training sessions scheduled

---

## Migration from Smartsheet

1. **Export Smartsheet**: Download as Excel/CSV
2. **Import to Monday.com**:
   - Go to Board → More Options → Import
   - Select Excel file
   - Map columns to Monday.com columns
3. **Clean Up**: 
   - Reorganize into groups
   - Set status labels
   - Add people assignments
4. **Connect Boards**: Link customer and tasks boards
5. **Set Up Automations**: Configure rules
6. **Create Dashboard**: Build executive view
7. **Train Team**: Onboard team to new system
8. **Go Live**: Start daily usage

---

## Cost Considerations

**Pricing (approximate):**
- Basic: $8/user/month (limited features)
- Standard: $10/user/month (recommended)
- Pro: $16/user/month (advanced features)
- Enterprise: Custom pricing

**Recommended Plan**: Standard or Pro
- Standard: Good for most teams
- Pro: Adds timeline dependencies, time tracking, formula columns

---

## Support Resources

- Monday.com Help Center: https://support.monday.com
- Video Tutorials: https://monday.com/learn
- Template Gallery: Browse pre-built templates
- Community: https://community.monday.com
- Live Chat: Available in-app

---

## Next Steps

1. ✅ Sign up for Monday.com trial
2. ✅ Create "Customer Implementations" workspace
3. ✅ Set up Board 1 with columns above
4. ✅ Add sample customer data
5. ✅ Create Board 2 for tasks
6. ✅ Connect the boards
7. ✅ Build dashboard
8. ✅ Set up 3-5 key automations
9. ✅ Invite team
10. ✅ Start using!

**Timeline**: Setup can be completed in 2-3 hours
