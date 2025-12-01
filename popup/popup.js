//ELEMENTS
const includeTagsElement = document.getElementById("includeTags")
const excludeTagsElement = document.getElementById("excludeTags")
const startDateElement = document.getElementById("startDate")
const endDateElement = document.getElementById("endDate")

//BUTTONS
const saveButton = document.getElementById("saveButton")

//CHECKBOXES
const includeAllButton = document.getElementById("includeAll")

saveButton.onClick = function()
{
  chrome.runtime.sendMessage({event: 'saveData'})
  console.log("Save Button")
}
