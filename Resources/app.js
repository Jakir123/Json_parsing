var win = Ti.UI.createWindow({
	backgroundColor : 'white',
});

var tableView = Ti.UI.createTableView({

});

var data = [{
	title : 'Row1'
}, {
	title : 'Row2'
}, {
	title : 'Row3'
}, {
	title : 'Row4'
}];

var btn = Ti.UI.createButton({
	title : 'Get',
	top : '50%',
	width : '40%',
	height : '50dp'
});
btn.addEventListener('click', function(e) {
	var url = 'http://pds.greenpowermail.com/assets/json.json';
	var client = Ti.Network.createHTTPClient({
		onload : function(e) {
			var output = this.responseText;
			Ti.API.info("RECEIVE TEXT "+output);
			var data = JSON.parse(output);
			var fighters = data.fighters;
			alert('success');
			var tableData = [];
			for (var i = 0,
			    j = fighters.length; i < j; i++) {
				var fighter = fighters[i];
				tableData.push({
					title : fighter.name
				});
			}
			tableView.setData(tableData);

		},
		timeout : 5000
	});
	client.open('GET', url);
	client.send();

});

tableView.setData(data);
win.add(tableView);
win.add(btn);
win.open();

