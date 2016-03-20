function searchUser(){
	var user_request = document.getElementById('input_user').value;
	req = new XMLHttpRequest();
	url = "https://api.github.com/users/"+user_request;
	req.open('GET', url, false);
	req.send();

	//Add margin bottom to the user search
	document.getElementById('search').setAttribute('class','margin_b');

	//empty the container html to display the next user or error message
	document.getElementById('result_cont').innerHTML=""; 
	if(req.status=="200"){
		document.getElementById('main').style.height="390px";
		user_info = JSON.parse(req.responseText);
		//Let's get the repos and the info related
		url=url+"/repos";
		displayUserInfo(user_info);
		repos = getRepos(url);
		if(repos!='notfound'){
			displayRepos(repos);
		}

	}else if(req.status=="404"){
		document.getElementById('main').style.height="";
		displayNotFound();
	}
}

function getRepos(url){
	var repos_req = new XMLHttpRequest();
	repos_req.open('GET', url, false);
	repos_req.send();
	var response = 'notfound';
	if(repos_req.status == '200'){
		response = JSON.parse(repos_req.responseText);
	}
	return response; 
}

function displayUserInfo(info){
	var user_div = document.createElement('div');
	user_div.setAttribute('class','usr_info margin_b');

	//Let's check the user has fullname and bio. Some of them don't have
	var name=info.name;
	if(info.name==null){
		name=info.login;
	}
	var bio=info.bio;
	if(info.bio==null){
		bio='This is the bio...';
	}

	user_div.innerHTML = '<img class="avatar margin_r" src="'+info.avatar_url+'" width="70px" height="70px"><div class="bio"><i>@'+info.login+'</i><br><span class="username">'+name+'</span><br><span>'+bio+'</span></div>';
	document.getElementById('result_cont').appendChild(user_div);
}

function displayRepos(repos){
	var table = document.createElement('TABLE');	
	table.setAttribute('class','t_repos');

	var header = table.createTHead();
	header.setAttribute('class','t_header');
	h_row=header.insertRow();
	h_row.innerHTML='<th><b>Repositories</b></th>';

	tbody=document.createElement('tbody');
	repos.forEach(function(repo){
		new_row = tbody.insertRow(tbody.rows.length);
		new_row.setAttribute('class','row');

		//There are only 2 cells
		info_repo = new_row.insertCell(0);
		info_repo.setAttribute('class', 'name_repo');

		/*name_repo.innerHTML = '<b>'+repo.name+'<b>';*/
		info_repo.innerHTML = '<span class="name"><b>'+repo.name+'</b></span><span class="stats"><span class="stars">'+repo.stargazers_count+'</span> <span class="forks">'+repo.forks+'</span></span>';
	});
	table.appendChild(tbody);
	document.getElementById('result_cont').appendChild(table);
	/*document.getElementById('result_cont').append('<div>HOLA</div>');*/
}

function displayNotFound(){
	var error_div = document.createElement('div');

	error_div.setAttribute('class','error_msg');
	error_div.innerHTML = '<span>Does not exist</span>';

	document.getElementById('result_cont').appendChild(error_div);
}