// Param =================================================================

	var defaultParam = {
		passphrase: '',
		color: 'color05'
	}
	var param = (Cookies.getJSON('ToDoList_param')) ? Cookies.getJSON('ToDoList_param') : defaultParam;

// Tasks =================================================================

	// Tasks array
	var tasks = {counter : 0};

	// Task constructor
	var Task = function(title,complete) {
		this.id = 'id' + tasks.counter;
		this.title = title;
		this.complete = (complete) ? complete : false;
		this.order = 0;
		tasks[this.id] = this;
		tasks.counter++;
		return this;
	}

	// Task html template
	function taskRender(t) {
		var i = '<li id="' + t.id + '" class="task-item list-group-item">' + t.title + '<i class="task-close fa fa-close"></i></li>';
		$(i).appendTo((t.complete) ? '.tasks-done' : '.tasks-new');
	}
	function renderAll(o) {
		var arr = [];
		for (t in o) {
			if (o[t].id) {arr.push(o[t]);}
		}
		arr.sort(function(a,b) {
			return a.order - b.order;
		});
		for (i=0;i<arr.length;i++) {
			taskRender(arr[i]);
		}
		noTasksCheck();
	}

	// Create task
	function newTask(t,s) {
		taskRender(new Task(t,s));
		saveOrder();
		saveTasks();
		noTasksCheck();
	}

	// Check task
	function checkTask(o) {
		var t = tasks[$(o).attr('id')];
		t.complete = !t.complete;
		$(o).appendTo((t.complete) ? '.tasks-done' : '.tasks-new');
		saveOrder();
		saveTasks();
		noTasksCheck();
	}

	// Delete task
	function deleteTask(o) {
		$(o).remove();
		delete tasks[$(o).attr('id')];
		saveOrder();
		saveTasks();
		noTasksCheck();
	}

	// Save order
	function saveOrder() {
		$('.task-item').each(function(i,e) {
			var id = $(e).attr('id');
			tasks[id].order = i;
		});
	}

	// No tasks text check
	function noTasksCheck() {
		var tn = $('.tasks-new .task-item').length,
			td = $('.tasks-done .task-item').length;
			nn = $('.no-new'),
			nd = $('.no-done');
		(tn) ? nn.hide() : nn.show();
		(td) ? nd.hide() : nd.show();
	}

// Save and load =========================================================

	// Save to localStorage
	function saveStorage(o) {
		localStorage.tasks = JSON.stringify(o);
	}

	// Load from localStorage
	function loadStorage() {
		tasks = JSON.parse(localStorage.tasks);
		renderAll(tasks);
	}

	// Ajax
	function connectDb(d,fd,ff) {
		$.ajax({
			url: 'database/db.php',
			type: 'POST',
			data: d,
		})
		.done(fd)
		.fail(ff)
		.always();
	}

	// Save in database
	function saveDb(p,t) {
		var d = {
			method: 'save',
			passphrase: p,
			tasks: JSON.stringify(t)
		};
		connectDb(d);
	}

	// Load from database
	function loadDb(p) {
		var d = {
			method: 'load',
			passphrase: p
		}
		function fd(d) {
			if (d) {
				tasks = JSON.parse(d);
				renderAll(tasks);
			} else {
				loadStorage();
			}
		}
		connectDb(d,fd,loadStorage);
	}

	// Save tasks
	function saveTasks() {
		saveStorage(tasks);
		if (param.passphrase) {
			saveDb(param.passphrase, tasks);
		}
	}

	// Load tasks
	function loadTasks() {
		if (param.passphrase || localStorage.tasks) {
			(param.passphrase) ? loadDb(param.passphrase) : loadStorage();
		} else {
			newTask('Create a new task');
			newTask('Click on the task to mark it as completed');
			newTask('Enjoy!');
			newTask('This is completed task', true);
		}
	}

// Settings ==============================================================

	// Save settings
	function saveSettings() {
		param.passphrase = $('.passphrase').val();
		param.color = $('input[name=color]').parent().find(':checked').val();
		Cookies.set('ToDoList_param', param, {expires: 365});
	}

	// Load settings
	function loadSettings() {
		$('.passphrase').val(param.passphrase);
		$('input[name=color][value=' + param.color + ']').prop('checked', true);
		changeColor(param.color);
	}

	// Change background color
	function changeColor(color) {
		var b = $('body');
		if (!b.hasClass(color)) {
			if (b.hasClass('modal-open')) {
				b.removeClass()
				 .addClass('modal-open')
				 .addClass(color);
			} else {
				b.removeClass()
				 .addClass(color);
			}
		}
	}

// Events ================================================================

	jQuery(document).ready(function($) {
		
		// Sort
		$('.tasks').sortable({
			deactivate: function(e) {
				saveOrder();
				saveTasks();
			}
		}).disableSelection();

		// New task
		$('.newtask').on('submit', function(e) {
			e.preventDefault();
			var i = $(this).find('input');
			if (i.val()) {
				newTask(i.val());
				i.val('');
			}
		});

		// Check task
		$('body').on('click', '.task-item', function() {
			checkTask(this);
		});
		
		// Delete task
		$('body').on('click', '.task-close', function(e) {
			e.stopPropagation();
			deleteTask($(this).parent('li'));
		});

		// Delete completed tasks
		$('.clear').on('click', function() {
			$('.tasks-done .task-item').each(function() {
				deleteTask(this);
			});
		});

		// Load tasks from server
		$('.tasks-load').on('click', function() {
			$('.task-item').remove();
			loadDb(param.passphrase);
		});

		// Save tasks on server
		$('.tasks-save').on('click', function() {
			saveDb(param.passphrase,tasks);
		});

		// Setting
		$('.settings').on('change', function() {
			saveSettings();
			changeColor(param.color);
		}).on('submit', function(e) {
			e.preventDefault();
		});
	});

// Start =================================================================

	jQuery(document).ready(function($) {
		// Load tasks and settings on startup
		loadSettings();
		loadTasks();
	});

