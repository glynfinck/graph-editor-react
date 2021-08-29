function run(worker, script, context, onSuccess, onError) {
	worker.onerror = onError;
	worker.onmessage = (e) => onSuccess(e.data);
	worker.postMessage({
		...context,
		python: script,
	});
}

export function asyncRun(worker, script, context) {
	return new Promise(function (onSuccess, onError) {
		run(worker, script, context, onSuccess, onError);
	});
}

