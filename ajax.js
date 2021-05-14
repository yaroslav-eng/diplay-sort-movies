export default function(reqData, onSuccess, onError, onComplete) {
	// console.log(reqData);
	//
	// console.log(JSON.stringify(reqData));
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				if(onSuccess) onSuccess(xhr.responseText != '' ? JSON.parse(JSON.parse(xhr.responseText)) : '');
			} else {
				if(onError && xhr.responseText != '') {
					let data = JSON.parse(xhr.responseText);
					if(data.ExceptionMessage) onError(data.ExceptionMessage);
				}
			}
		}
	};
	xhr.open('POST', 'https://green02.celayix.com/WEBXPTEST/api/Common/Service1');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(reqData));
	return xhr;
}
