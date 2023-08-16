import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function EventDetail() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="h-fit p-6 mb-40 md:p-8 lg:p-0 container mx-auto max-w-4xl relative">
      <img src="https://placehold.co/1200x400" alt="" />
      <h2 className="text-2xl font-bold slate-700 mt-8">행사 이름</h2>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            allowScrollButtonsMobile='true'
            scrollButtons="true"
            aria-label="scrollable auto tabs example"
            className="w-full mt-8"
          >
            <Tab label="행사 소개" {...a11yProps(0)} />
            <Tab label="행사 장소" {...a11yProps(1)} />
            <Tab label="취소/환불" {...a11yProps(2)} />
            <Tab label="채널 정보" {...a11yProps(3)} />
            <Tab label="공지/안내" {...a11yProps(4)} />
            <Tab label="문의하기" {...a11yProps(5)} />
            <Tab label="추천" {...a11yProps(6)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          행사 소개
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          행사 장소
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          취소/환불
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          채널 정보
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          공지/안내
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          문의하기
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          추천
        </CustomTabPanel>
      </Box>

    </div>
  );
}
