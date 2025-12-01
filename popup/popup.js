//ELEMENTS
const includeTagsElement = document.getElementById("includeTags")
const includeAllElement = document.getElementById("includeAll")
const excludeTagsElement = document.getElementById("excludeTags")
const startDateElement = document.getElementById("startDate")
const endDateElement = document.getElementById("endDate")

//BUTTONS
const saveButton = document.getElementById("saveButton")

saveButton.onClick = () => {
  const prefs = {
    includeTags: includeTagsElement.value,
    includeAll: includeAllElement.value,
    excludeTags: excludeTagsElement.value,
    startDate: startDateElement.value,
    endDate: endDateElement.value
  }
  chrome.runtime.sendMessage({event: 'saveData', prefs})
}
