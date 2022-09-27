<template>
    <div>
        <apexchart
            :options="chartOptions"
            :series="series"
            height="200px"
          ></apexchart>
    </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
    components: { apexchart: VueApexCharts },
    setup() {
        const series = [35000000, 16800000, 14000000, 3500000, 700000];
        const chartOptions = {
        chart: {
            type: "pie",
            toolbar: {
            show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        labels: ["For Publici Sale 50.0%", "Funders 24.0%", "For preSale 20.0%", "Advisor 5.0%", "Team 1.0%"],
        fill: {
            type: "gradient",
        },
        stroke: {
            show: false,
        },
        plotOptions: {
            pie: {
            expandOnClick: false,
            donut: {
                labels: {
                show: true,
                name: {
                    show: true,
                    fontFamily: "Roboto",
                    offsetY: 20,
                },
                value: {
                    show: false,
                    fontSize: "25px",
                    fontFamily: "Roboto",
                    fontWeight: 500,
                    color: "#DEE6EF",
                    offsetY: -15,
                    formatter: function (val) {
                    return val;
                    },
                },
                total: {
                    show: false,
                    label: "Total",
                    color: "#DEE6EF",
                    fontSize: "10px",
                    fontFamily: "Roboto",
                    formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                        return a + b;
                    }, 0);
                    },
                },
                },
            },
            },
        },
        responsive: [
            {
            chart: {
                width: 250,
            },
            breakpoint: 700,
            options: {
                legend: {
                position: "bottom",
                },
                itemMargin: {
                horizontal: 5,
                vertical: 10,
                },
            },
            },
        ],
        };
        return {
        series,
        chartOptions
        };
    }
}
</script>