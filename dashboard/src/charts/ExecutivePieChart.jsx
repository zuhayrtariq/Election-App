import React, { useContext, useEffect, useState } from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { axisClasses } from "@mui/x-charts";
import axios from "axios";
const ExecutivePieChart = () => {
  const [votersData, setVotersData] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  const [value, setValue] = useState(0)
  const getCoffExpData = async () => {
    
    const { data } = await axios.get("/votes-data?positionId=5");
   
    const updatedData = data.map((x, i) => {
      return{
          id: i,
          label: x.Name,
          value: x.Votes,
        }

    });
    
    setVotersData([...updatedData]);
  };
  useEffect(() => {
        (async () => {
            await getCoffExpData();
            setLoadedData(true);
          })();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
        (async () => {
            await getCoffExpData();
            setLoadedData(true);
          })();
        setValue(v => v <= 0 ? (40) : v - 1);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return (
    <div className=" w-full h-full">
      {loadedData ? (
        <PieChart
           colors={["#379F2E", "#89C54A", "green", "cyan", "lightblue", "orange", "grey", "yellow"]}
          series={[
            {
              data: votersData,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 10, additionalRadius: -10, color: "gray" },
              innerRadius: 15,
              outerRadius: 200,
              //  cx: 450,
              //  paddingAngle: 2,
              cornerRadius: 3,

              arcLabel: (item) => `${item.value}`,
              arcLabelMinAngle: 1,
            },
          ]}
          //  slotProps={{
          //    legend: {
          //      labelStyle: {
          //        fontSize: 14,
          //      },
          //      itemMarkWidth: 10,
          //  itemMarkHeight: 10,
          //  markGap: 5,
          //      direction: 'row',
          //      position: { vertical: 'top', horizontal: 'middle' },
          //      padding: 0,
          //    },
          //  }}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontWeight: "bold",
              //  fontSize : '10px'
            },
          }}
        />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ExecutivePieChart;
