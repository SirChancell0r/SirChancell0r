document.querySelector('.calculator-form').addEventListener('submit', handleSubmit)
document.querySelector('.reset-button').addEventListener('click', reset)

function handleSubmit(e) {
    e.preventDefault()

    let numberOfTechnicians = document.querySelector('.number-of-technicians')
    numberOfTechnicians = numberOfTechnicians.value
    numberOfTechnicians = parseFloat(numberOfTechnicians)

   
    let annualPartsRevenue = document.querySelector('.annual-parts-revenue')
    annualPartsRevenue = annualPartsRevenue.value
    annualPartsRevenue = parseFloat(annualPartsRevenue)

   
    let savedPerYear = calculateSavedPerYear(numberOfTechnicians, annualPartsRevenue)
    savedPerYear = formatCurrency(savedPerYear)

    let resultSavedPerYear = `Yearly Savings: $${savedPerYear}`

    document.querySelector('.resultSavedPerYear').innerText = resultSavedPerYear

    
    let fiveYearProfit = calculateFiveYearProfit(numberOfTechnicians, annualPartsRevenue)
    fiveYearProfit = formatCurrency(fiveYearProfit)

    let resultFiveYearProfit = `Five Year Profit: $${fiveYearProfit}`

    document.querySelector('.resultFiveYearProfit').innerText = resultFiveYearProfit

   
    let fiveYearROI = calculateFiveYearROI(numberOfTechnicians, annualPartsRevenue)
    fiveYearROI = formatAsPercentage(fiveYearROI)

    let resultFiveYearROI = `Five Year ROI: ${fiveYearROI}%`

    document.querySelector('.resultFiveYearROI').innerText = resultFiveYearROI


    let breakEvenYears = calculateBreakEvenYears(numberOfTechnicians, annualPartsRevenue)
    breakEvenYears = formatCurrency(breakEvenYears)

    let resultBreakEvenYears = `Break Even Years: ${breakEvenYears}`

    document.querySelector('.resultBreakEvenYears').innerText = resultBreakEvenYears

}

function calculateSavedPerYear(numberOfTechnicians, annualPartsRevenue) {
    let technicianSavings = numberOfTechnicians * 3250
    let annualPartsSavings = annualPartsRevenue * 0.01 

    for (let i = 0; i < numberOfTechnicians; i++) {
        savedPerYear = technicianSavings + annualPartsSavings

    }

    return savedPerYear
}


function calculateFiveYearProfit(numberOfTechnicians, annualPartsRevenue) {
    let technicianSavings2 = numberOfTechnicians * 3250
    let annualPartsSavings2 = annualPartsRevenue * 0.01
    let savedPerYear2 = technicianSavings2 + annualPartsSavings2  

    for (let i = 0; i < numberOfTechnicians; i++) {
        fiveYearProfit = (savedPerYear2 * 5) - ((numberOfTechnicians * 1090) * (5)) - 20000
    }

    return fiveYearProfit
}

function calculateFiveYearROI(numberOfTechnicians, annualPartsRevenue) {
    let technicianSavings3 = numberOfTechnicians * 3250
    let annualPartsSavings3 = annualPartsRevenue * 0.01     

    for(let i = 0; i < numberOfTechnicians; i++) {
        fiveYearROI = ((((1090 * numberOfTechnicians) * 5) + 20000) / ((technicianSavings3 + annualPartsSavings3) * 5)) * 100
    }

    return fiveYearROI
}

function calculateBreakEvenYears(numberOfTechnicians, annualPartsRevenue) {
    let technicianSavings4 = numberOfTechnicians * 3250
    let annualPartsSavings4 = annualPartsRevenue * 0.01

    for(let i = 0; i < numberOfTechnicians; i++) {
        breakEvenYears = (((20000 + (1090 * numberOfTechnicians)) / (technicianSavings4 + annualPartsSavings4))) + ((1090 * numberOfTechnicians) / (technicianSavings4 + annualPartsSavings4))
    }

    return breakEvenYears
}

function reset() {
    document.querySelector('.number-of-technicians').value = ''
    document.querySelector('.annual-parts-revenue').value = ''
    document.querySelector('.resultSavedPerYear').innerText = ''
    document.querySelector('.resultFiveYearProfit').innerText = ''
    document.querySelector('.resultFiveYearROI').innerText = ''
    document.querySelector('.resultBreakEvenYears').innerText = ''
}

function formatCurrency(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

function formatAsPercentage(number) {
  return number.toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}