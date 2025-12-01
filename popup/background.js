chrome.runtime.onMessage.addListener(data => {
  const {event, prefs} = data
  switch (event) {
    case 'saveData':
      handleSaveData(prefs);
      break;
    default:
      break;
  }
})

const handleSaveData = (prefs) => {
  chrome.storage.local.set(prefs)
  console.log("prefs:")
  console.log(prefs)
}
