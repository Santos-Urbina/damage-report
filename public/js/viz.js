// Separate file for creating d3 visualization
const viz = (damageGraphDiv) => {
    const svg = d3.select(damageGraphDiv).append("svg")
            .attr("width", "65vw")
            .attr("height", "65vh");
}
