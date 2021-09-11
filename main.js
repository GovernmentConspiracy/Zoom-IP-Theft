function create_link(text) {
	let div = document.createElement('div');
	div.innerHTML = 
		`<div id="download_container" 
		style="position:fixed;
		right:0px;
		bottom:0px;
		width:100%;
		padding:5px 20px 5px 20px;
		border:1px solid #000000;
		font-size:20px;
		background-color:#000000;
		font-weight:bold;
		text-align:center;">
		<span id="download_dismiss" 
		style="font-size:12px;
		cursor:pointer;
		position:absolute;
		top:0px;
		right:0px;
		color:#FFFFFF;">X</span>
		<a id="downloader"
		download="proposed_file_name".mp4>
		</a>
		</div>`;
	document.body.appendChild(div);
	let link = document.getElementById("downloader");
	link.href = new URL(document.getElementsByTagName("video")[0].src);
	link.innerHTML = text;
}

let display_text = "alt+LMB to download";
create_link(display_text);
document.getElementById("download_dismiss").addEventListener('click', function (event) {
	document.getElementById("download_container").remove();
}, false);


