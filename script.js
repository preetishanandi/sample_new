// Basic Data for the Chart
const data = [6, 8, 3, 10, 4, 7, 12]; // Heights of bars
const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ,'Sunday']; // Labels for bars
const barColors = ['orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange']; // Colors for bars

// Get the Canvas Context
const canvas = document.getElementById('barChart');
const ctx = canvas.getContext('2d');

ctx.font = "24px Arial";          // Font size and style
ctx.fillStyle = "#333";           // Text color
ctx.textAlign = "center";         // Center the text horizontally
ctx.fillText("Daily Learning Time", canvas.width / 2, 25);

// Chart Dimensions
const chartWidth = canvas.width;
const chartHeight = canvas.height;
const barWidth = 70; // Width of each bar
const gap = 30; // Gap between bars
const padding = 40; // Padding for axes
const maxDataValue = Math.max(...data); // Maximum value in data for scaling
const scaleFactor = (chartHeight - 2 * padding) / maxDataValue; // Scale factor for bar heights

// Draw Grid and Axes
function drawGridAndAxes() {
  ctx.strokeStyle = '#ccc'; // Grid line color
  ctx.lineWidth = 1;
  ctx.font = '14px Arial';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';

  // Draw Y-axis Grid Lines
  const gridCount = 6; // Number of grid lines
  const gridSpacing = maxDataValue / gridCount;

  for (let i = 0; i <= gridCount; i++) {
    const y = chartHeight - padding - (i * gridSpacing * scaleFactor);

    // Draw horizontal grid line
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(chartWidth - padding, y);
    ctx.stroke();

    // Draw Y-axis labels
    ctx.fillStyle = 'black';
    ctx.fillText((i * gridSpacing).toFixed(0), padding - 10, y);
  }

  // Draw X-axis
  ctx.beginPath();
  ctx.moveTo(padding, chartHeight - padding);
  ctx.lineTo(chartWidth - padding, chartHeight - padding);
  ctx.stroke();

  // Draw Y-axis
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, chartHeight - padding);
  ctx.stroke();
}

// Draw the Bars
function drawBars() {
  data.forEach((value, index) => {
    const barHeight = value * scaleFactor; // Calculate scaled bar height
    const x = padding + index * (barWidth + gap) + gap; // X-coordinate for the bar
    const y = chartHeight - padding - barHeight; // Y-coordinate for the bar

    // Draw each bar
    ctx.fillStyle = barColors[index];
    ctx.fillRect(x, y, barWidth, barHeight);

    // Add Labels below each bar
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(labels[index], x + barWidth / 2, chartHeight - padding + 20);
  });
}

// // / Draw X-axis Grid Lines
// const gridCount = 6; // Number of grid lines (same as number of bars)
// const gridSpacing = (chartWidth - 4.2 * padding) / gridCount; // Distance between vertical grid lines

// for (let i = 0; i <= gridCount; i++) {
//   const x = chartWidth - padding - i * gridSpacing; // X-coordinate for each grid line

//   // Draw vertical grid line
//   ctx.beginPath();
//   ctx.moveTo(x, padding); // Start at the top (Y-axis minimum)
//   ctx.lineTo(x, chartHeight - padding); // Draw down to the bottom (Y-axis maximum)
//   ctx.stroke();

//   // Add X-axis labels (optional, below the chart)
  
//     ctx.fillStyle = 'black';
    
//     // Centered below each grid line
// }


function startProgress() {
  let progress = 0;
  const circle = document.querySelector(".progress-circle");
  const valueText = document.querySelector(".progress-value");

  const interval = setInterval(() => {
    progress++;
    

    // Updating the conic-gradient angle based on progress
    circle.style.background = `conic-gradient(#40854f ${progress * 3.6}deg, #ddd 0deg)`;

    if (progress >= 100) {
      clearInterval(interval); // Stop when progress reaches 100%
    }
  }, 20); // Controls the speed of progress
}
// Auto-start the progress when the page loads
window.onload = startProgress;










// Draw the Chart
drawGridAndAxes();
drawBars();
