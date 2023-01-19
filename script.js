const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  bible: ["01-18", "01-21", "01-29"],
  run: ["01-10", "01-19", "01-22", "01-23", "01-25", "01-27", "01-30", "01-31"],
  food: ["01-19", "01-27", "01-29"],
  play: ["01-05", "01-06", "01-26", "01-28"],
}

nlwSetup.setData(data)
nlwSetup.load()
