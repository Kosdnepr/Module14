var refresh = document.getElementById('refresh');
refresh.addEventListener('click', getCourses);

function getCourses(event) {
	var URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';
	
	var req = new XMLHttpRequest();
	req.open("GET", URL, true);
	req.send(null);
	
	req.onreadystatechange = function() {
		if (req.readyState === XMLHttpRequest.DONE) {        
			var exchange = JSON.parse(req.responseText);
			
			var container = document.getElementById('courses');
			container.innerHTML = '';
			
			var table = document.createElement('table');
			table.setAttribute('border', '2px solid gray');

			var ccy = document.createElement('th');
			ccy.innerHTML = 'ccy';
			var base_ccy = document.createElement('th');
			base_ccy.innerHTML = 'base_ccy';
			var buy = document.createElement('th');
			buy.innerHTML = 'buy';
			var sale = document.createElement('th');
			sale.innerHTML = 'sale';

			table.appendChild(ccy);
			table.appendChild(base_ccy);
			table.appendChild(buy);
			table.appendChild(sale);

			var strings = exchange.length;
			for (var i = 0; i < strings; i++) {
				var tr = document.createElement('tr');
				for (prop in exchange[i]) {
					var td = document.createElement('td');
					td.innerHTML = exchange[i][prop];
					tr.appendChild(td);
				}
				table.appendChild(tr);
	    		}
			container.appendChild(table);
		}
	}
	var date = new Date;
	var datePar = document.getElementById('date');
	datePar.innerHTML = 'actually at ' + date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}
