// Sample tasks data
let tasks = [
    {
        id: 1,
        title: "Enterprise Onboarding - Configuration",
        customer: "Acme Corp",
        status: "planning",
        priority: "high",
        assignee: "Sarah Chen",
        progress: 15
    },
    {
        id: 2,
        title: "Integration Development",
        customer: "TechStart",
        status: "progress",
        priority: "high",
        assignee: "David Franklin",
        progress: 60
    },
    {
        id: 3,
        title: "Data Migration Planning",
        customer: "GlobalBank",
        status: "planning",
        priority: "medium",
        assignee: "Maria Rodriguez",
        progress: 30
    },
    {
        id: 4,
        title: "System Configuration",
        customer: "HealthPlus",
        status: "progress",
        priority: "high",
        assignee: "James Kim",
        progress: 45
    },
    {
        id: 5,
        title: "UAT Test Scenarios",
        customer: "Acme Corp",
        status: "uat",
        priority: "high",
        assignee: "Sarah Chen",
        progress: 85
    },
    {
        id: 6,
        title: "User Training Sessions",
        customer: "TechStart",
        status: "progress",
        priority: "medium",
        assignee: "Lisa Thompson",
        progress: 70
    },
    {
        id: 7,
        title: "Go-Live Checklist",
        customer: "GlobalBank",
        status: "planning",
        priority: "low",
        assignee: "David Franklin",
        progress: 10
    },
    {
        id: 8,
        title: "Final UAT Sign-off",
        customer: "HealthPlus",
        status: "uat",
        priority: "high",
        assignee: "Maria Rodriguez",
        progress: 90
    },
    {
        id: 9,
        title: "Production Deployment",
        customer: "Acme Corp",
        status: "complete",
        priority: "high",
        assignee: "Sarah Chen",
        progress: 100
    },
    {
        id: 10,
        title: "Post Go-Live Support",
        customer: "TechStart",
        status: "complete",
        priority: "medium",
        assignee: "Lisa Thompson",
        progress: 100
    },
    {
        id: 11,
        title: "Security Configuration",
        customer: "GlobalBank",
        status: "progress",
        priority: "high",
        assignee: "James Kim",
        progress: 55
    },
    {
        id: 12,
        title: "API Integration Testing",
        customer: "HealthPlus",
        status: "progress",
        priority: "medium",
        assignee: "David Franklin",
        progress: 40
    }
];

let currentFilter = 'all';
let draggedTask = null;

// Initialize the board
function initBoard() {
    renderTasks();
    updateStats();
    setupDragAndDrop();
    setupFilters();
}

// Render tasks to the board
function renderTasks() {
    // Clear all columns
    ['planning', 'progress', 'uat', 'complete'].forEach(status => {
        const column = document.getElementById(`${status}-tasks`);
        if (column) column.innerHTML = '';
    });

    // Filter and render tasks
    const filteredTasks = currentFilter === 'all' 
        ? tasks 
        : tasks.filter(t => t.customer === currentFilter);

    filteredTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        const column = document.getElementById(`${task.status}-tasks`);
        if (column) column.appendChild(taskElement);
    });

    // Update column counts
    updateColumnCounts();
}

// Create task HTML element
function createTaskElement(task) {
    const div = document.createElement('div');
    div.className = 'kanban-task';
    div.draggable = true;
    div.dataset.taskId = task.id;

    const initials = task.assignee.split(' ').map(n => n[0]).join('');
    const priorityClass = `priority-${task.priority}`;

    div.innerHTML = `
        <div class="task-header">
            <div class="task-title">${task.title}</div>
        </div>
        <div class="task-customer">🏢 ${task.customer}</div>
        <div class="task-meta">
            <span class="task-tag ${priorityClass}">${task.priority.toUpperCase()}</span>
            <div class="task-assignee">
                <div class="assignee-avatar">${initials}</div>
                <span>${task.assignee.split(' ')[0]}</span>
            </div>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${task.progress}%"></div>
        </div>
    `;

    return div;
}

// Setup drag and drop
function setupDragAndDrop() {
    const taskElements = document.querySelectorAll('.kanban-task');
    const columns = document.querySelectorAll('.kanban-tasks');

    taskElements.forEach(task => {
        task.addEventListener('dragstart', handleDragStart);
        task.addEventListener('dragend', handleDragEnd);
    });

    columns.forEach(column => {
        column.addEventListener('dragover', handleDragOver);
        column.addEventListener('drop', handleDrop);
        column.addEventListener('dragleave', handleDragLeave);
    });
}

function handleDragStart(e) {
    draggedTask = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    document.querySelectorAll('.kanban-tasks').forEach(col => {
        col.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
    return false;
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    this.classList.remove('drag-over');

    if (draggedTask) {
        const taskId = parseInt(draggedTask.dataset.taskId);
        const newStatus = this.id.replace('-tasks', '');
        
        // Update task status
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.status = newStatus;
            
            // Animate the move
            draggedTask.style.animation = 'fadeInUp 0.3s ease';
            
            // Re-render
            renderTasks();
            updateStats();
            setupDragAndDrop();
            
            // Show success message
            showToast(`Task moved to ${newStatus}`);
        }
    }

    return false;
}

// Setup filters
function setupFilters() {
    document.querySelectorAll('.filter-pill').forEach(pill => {
        pill.addEventListener('click', function() {
            document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.customer;
            renderTasks();
            updateStats();
            setupDragAndDrop();
        });
    });
}

// Update statistics
function updateStats() {
    const filtered = currentFilter === 'all' ? tasks : tasks.filter(t => t.customer === currentFilter);
    
    document.getElementById('stat-total').textContent = filtered.length;
    document.getElementById('stat-active').textContent = filtered.filter(t => t.status === 'progress').length;
    document.getElementById('stat-uat').textContent = filtered.filter(t => t.status === 'uat').length;
    document.getElementById('stat-complete').textContent = filtered.filter(t => t.status === 'complete').length;
}

// Update column counts
function updateColumnCounts() {
    ['planning', 'progress', 'uat', 'complete'].forEach(status => {
        const column = document.querySelector(`[data-status="${status}"]`);
        if (column) {
            const count = column.querySelector('.column-count');
            const tasks = column.querySelectorAll('.kanban-task').length;
            if (count) count.textContent = tasks;
        }
    });
}

// Add sample task
function addSampleTask() {
    const customers = ['Acme Corp', 'TechStart', 'GlobalBank', 'HealthPlus'];
    const titles = [
        'Requirements Gathering',
        'System Setup',
        'Custom Workflow Config',
        'Integration Testing',
        'User Acceptance Testing',
        'Training Materials',
        'Documentation Review'
    ];
    const assignees = ['Sarah Chen', 'David Franklin', 'Maria Rodriguez', 'James Kim', 'Lisa Thompson'];
    const priorities = ['high', 'medium', 'low'];
    const statuses = ['planning', 'progress'];

    const newTask = {
        id: tasks.length + 1,
        title: titles[Math.floor(Math.random() * titles.length)],
        customer: customers[Math.floor(Math.random() * customers.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        priority: priorities[Math.floor(Math.random() * priorities.length)],
        assignee: assignees[Math.floor(Math.random() * assignees.length)],
        progress: Math.floor(Math.random() * 30)
    };

    tasks.push(newTask);
    renderTasks();
    updateStats();
    setupDragAndDrop();
    showToast('New task added!');
}

// Reset demo
function resetDemo() {
    if (confirm('Reset the demo board to initial state?')) {
        location.reload();
    }
}

// Export data
function exportData() {
    const dataStr = JSON.stringify(tasks, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'implementation-tasks.json';
    link.click();
    showToast('Data exported!');
}

// Add task to specific column
function addTask(status) {
    const title = prompt('Enter task title:');
    if (!title) return;

    const customers = ['Acme Corp', 'TechStart', 'GlobalBank', 'HealthPlus'];
    const assignees = ['Sarah Chen', 'David Franklin', 'Maria Rodriguez', 'James Kim', 'Lisa Thompson'];

    const newTask = {
        id: tasks.length + 1,
        title: title,
        customer: customers[0],
        status: status,
        priority: 'medium',
        assignee: assignees[0],
        progress: 0
    };

    tasks.push(newTask);
    renderTasks();
    updateStats();
    setupDragAndDrop();
    showToast('Task created!');
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--gray-900);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: fadeInUp 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initBoard);
