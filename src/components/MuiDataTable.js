import React, {useState, useEffect} from "react";
import MUIDataTable, {TableFilterList} from "mui-datatables";
import axios from "axios";
import {Dropdown} from "react-bootstrap";

import {MuiThemeProvider} from "@material-ui/core/styles";
import Chip from '@material-ui/core/Chip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AudioFileIcon from '@mui/icons-material/AudioFile';

function MuiDataTable() {

    const [teachersData,
        setTeachersData] = useState([]);

    const columns_2 = [
        {
            name: "teacher_id",
            label: "Teacher Id",
            options: {
                filter: false,
                filterType: "dropdown"
            }
        }, {
            name: "teacher_name",
            label: "Teacher Name",
            options: {
                filter: false,
                filterType: "dropdown",
                customBodyRender: (value) => {
                    return (
                        <div style={{color: "blue", textTransform: "capitalize", fontWeight: "bold"}}
                            onClick={(value) => {
                                console.log(value.target);
                                alert(value);
                            }}>{value}
                        </div>
                    )
                }
            }
        }, {
            name: "contactno",
            label: "Phone Number",
            options: {
                filter: false,
                filterType: "dropdown"
            }
        }, {
            name: "email",
            label: "Email",
            options: {
                filter: false,
                filterType: "dropdown"
            }
        }, {
            name: "spoken_languages",
            label: "Languages",
            options: {
                filter: false,
                filterType: "dropdown"
            }
        }, {
            name: "apr_reference_name",
            label: "APR Reference Name",
            options: {
                filter: false,
                filterType: "dropdown"
            }
        }, {
            name: "apr_reference_contact",
            label: "APR Phone Number",
            options: {
                filter: false,
                filterType: "dropdown"
            }
        }, {
            name: "teacher_status",
            label: "Teacher Status",
            options: {
                filter: true,
                filterType: "checkbox"
            }
        }, {
            name: "group_id",
            label: "Group Id",
            options: {
                filter: false,
            }
        }, {
            name: "group_status",
            label: "Group Status",
            options: {
                filter: true,
                filterType: "checkbox",
                customBodyRender: (value) => {
                    // console.log(value)
                    return (
                        <div>
                            {value === "grouped"
                                ?   <div
                                        style={{
                                        backgroundColor: "rgb(60, 210, 60)",
                                        color: "white",
                                        width: "fit-content",
                                        padding: "5px",
                                        borderRadius: "5px"
                                    }}>Grouped</div>
                                :   <div
                                        style={{
                                        backgroundColor: "#f34848",
                                        color: "white",
                                        width: "fit-content",
                                        padding: "5px",
                                        borderRadius: "5px"
                                    }}>Ungrouped</div>
                            }
                        </div>
                    )
                }
            }
        }, {
            name: "audio_status",
            label: "Audio Status",
            options: {
                filter: true,
                filterType: "checkbox",
                customBodyRender: (value) => {
                    // console.log(value)
                    return (
                        <div>
                            {value === "approved"
                                ?   <div
                                        style={{
                                            backgroundColor: "#16ea16",
                                            color: "white",
                                            width: "fit-content",
                                            padding: "5px",
                                            borderRadius: "5px"}}>
                                        <AudioFileIcon />
                                    </div>
                                :   value === "rejected" ?  <div
                                        style={{
                                            backgroundColor: "#f34848",
                                            color: "white",
                                            width: "fit-content",
                                            padding: "5px",
                                            borderRadius: "5px"}}>
                                        <AudioFileIcon/>
                                    </div>
                                :   value === "resend" ? <div
                                        style={{
                                            backgroundColor: "yellow",
                                            color: "white",
                                            width: "fit-content",
                                            padding: "5px",
                                            borderRadius: "5px"}}>
                                        <AudioFileIcon/>
                                    </div>
                                :   value === "submitted" ? <div
                                        style={{
                                            backgroundColor: "blue",
                                            color: "white",
                                            width: "fit-content",
                                            padding: "5px",
                                            borderRadius: "5px"}}>
                                        <AudioFileIcon/>
                                    </div>
                                :   <div
                                        style={{
                                            backgroundColor: "maroon",
                                            color: "white",
                                            width: "fit-content",
                                            padding: "5px",
                                            borderRadius: "5px"}}>
                                        <AudioFileIcon/>
                                    </div>
                            }
                        </div>
                    )
                }
            }
        }, {
            name: "Action",
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRenderLite: (dataIndex, dataValue) => {
                    // console.log(dataIndex);
                    // console.log(dataValue);
                    return (
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary rounded-circle" id="dropdown-basic">
                                    <MoreVertIcon/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#" onClick={() => alert("Button 1")}>Action 1</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => alert("Button 2")}>Action 2</Dropdown.Item>
                                    <Dropdown.Item href="#" onClick={() => alert("Button 3")}>Action 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    );
                }
            }
        }
    ]

    async function getTeachersData() {
        try {
            const data = await axios.get("http://localhost:8080/api/teacher/view/teacherview");
            // console.log(data.data);
            setTeachersData(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTeachersData();
    }, []);

    const columns_1 = ["Name", "Company", "City", "State"];

    const data = [
        [
            "Joe James", "Test Corp", "Yonkers", "NY"
        ],
        [
            "John Walsh", "Test Corp", "Hartford", "CT"
        ],
        [
            "BobHerm", "Test Corp", "Tampa", "FL"
        ],
        ["James Houston", "Test Corp", "Dallas", "TX"]
    ];

    const options = {
        filter: true,
        filterType: "dropdown",
        responsive: "standard",
        rowsPerPage: 5,
        rowsPerPageOptions: [
            1,
            5,
            10,
            20,
            50,
            100
        ],
        jumpToPage: true,
        onRowClick: (rowData, rowState) => {
            // console.log(rowData, rowState);
        }
    };

    const CustomChip = ({label, onDelete}) => {
        return (<Chip variant="outlined" color="secondary" label={label} onDelete={onDelete}/>);
    };

    const CustomFilterList = (props) => {
        return <TableFilterList {...props} ItemComponent={CustomChip}/>;
    };

    return (
        <div>
            <MuiThemeProvider>
                <MUIDataTable
                    title={"Teacher Data"}
                    data={teachersData}
                    columns={columns_2}
                    options={options}
                    components={{
                    TableFilterList: CustomFilterList
                }}/>

                {/* <MUIDataTable
                    title={"Employee List"}
                    data={data}
                    columns={columns_1}
                    options={options}
                /> */}
            </MuiThemeProvider>
        </div>
    )
}

export default MuiDataTable;