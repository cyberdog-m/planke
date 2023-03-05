<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { computed } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

const props = defineProps({
  overallScores: Object,
});

const chartData = computed(() => {
  return {
    labels: Object.keys(props.overallScores).map((name) => name.toUpperCase()),
    datasets: [{ data: Object.values(props.overallScores) }],
  };
});

const chartOptions = {
  responsive: true,
  backgroundColor: [
    "rgb(132, 99, 248)",
    "rgb(235, 67, 188)",
    "rgb(71, 229, 239)",
    "rgb(248, 140, 94)",
  ],
  layout: {
    padding: {
      top: 40,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
      titleFont: {
        family: "Clash Display",
        weight: 400,
      },
      bodyFont: {
        family: "Clash Display",
        weight: 400,
        size: 14,
      },
    },
    datalabels: {
      color: "#ffffff",
      textStrokeColor: "rgba(255, 255, 255, 0)",
      textStrokeWidth: 6,
      font: {
        family: "Clash Display",
        weight: 500,
        size: 25,
      },
      anchor: "end",
      align: "top",
    },
  },
  borderRadius: 5,
  borderSkipped: false,
  maintainAspectRatio: false,
  scales: {
    y: {
      display: false,
      beginAtZero: true,
    },
    x: {
      display: true,
      ticks: {
        color: "#ffffff",
        font: {
          family: "Clash Display",
          weight: "500",
          size: 18,
        },
      },
      grid: {
        display: false,
      },
    },
  },
};
</script>

<template>
  <div class="w-full h-[20rem] rounded-xl bg-secondary">
    <div class="h-full px-2 py-4">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>
