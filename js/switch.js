var HIDDEN_CLASS_NAME = 'hidden';
var TARGET_CLASS_NAME = 'target';
var SOURCE_CLASS_NAME = 'source';

var targetIdToShow = 1;

function main() {
	let targets = getElements(TARGET_CLASS_NAME);
	let sources = getElements(SOURCE_CLASS_NAME);
	sources.forEach(function (sourceNode) {
		let sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME);
		sourceNode.addEventListener('click', function () {
			showTarget(targets, sourceNodeId);
		});
	});
	showTarget(targets, targetIdToShow);
}

function getElements(type) {
	return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
		let target1Num = extractId(targetNode1, TARGET_CLASS_NAME);
		let target2Num = extractId(targetNode2, TARGET_CLASS_NAME);
		return target1Num > target2Num;
	});
}

function extractId(targetNode, baseClass) {
	let currentClassIndex = targetNode.classList.length;
	while (currentClassIndex--) {
		let currentClass = targetNode.classList.item(currentClassIndex);
		let maybeIdNum = parseInt(currentClass.split('-')[1]);
		if (isNaN(maybeIdNum)) {
			continue;
		}
		let classStrinToValidate = baseClass + '-' + maybeIdNum;
		if (classStrinToValidate === currentClass) {
			return maybeIdNum;
		}
	}
}

function showTarget(targets, targetId) {
	targets.forEach(function (targetNode, targetIndex) {
    let currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME);
		if (currentTargetNodeId === targetId) {
			targetNode.classList.remove(HIDDEN_CLASS_NAME);
		} else {
			targetNode.classList.add(HIDDEN_CLASS_NAME);
		}
	});
}

main();