// This is adapted from https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7

var data2_new = {"directed": false, "multigraph": false, "graph": {}, "nodes": [{"betweenness": 0.0, "class": 0, "id": "reactor_OP"}, {"betweenness": 0.0, "class": 0, "id": "plant_manager"}, {"betweenness": 0.0, "class": 0, "id": "auxiliary_building_assistant"}, {"betweenness": 17.142857142857142, "class": 2, "id": "engineers_unspec"}, {"betweenness": 0.0, "class": 0, "id": "s_reactor_operator"}, {"betweenness": 0.0, "class": 0, "id": "CR_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "physician"}, {"betweenness": 0.0, "class": 0, "id": "mechanic_unspec"}, {"betweenness": 0.0, "class": 0, "id": "shift_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "contractor_nonlicensed"}, {"betweenness": 0.0, "class": 0, "id": "operator_trainee_unspec"}, {"betweenness": 0.0, "class": 0, "id": "maintenance_sup"}, {"betweenness": 0.0, "class": 0, "id": "reactor_ENG"}, {"betweenness": 0.0, "class": 0, "id": "util_OP"}, {"betweenness": 49.25170068027211, "class": 3, "id": "operators_unspec"}, {"betweenness": 0.0, "class": 0, "id": "supervisor"}, {"betweenness": 0.0, "class": 0, "id": "CR_shift_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "system_design_ENG"}, {"betweenness": 133.74149659863946, "class": 3, "id": "operator_unspec"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_staff"}, {"betweenness": 0.0, "class": 0, "id": "mechanics_unspec"}, {"betweenness": 0.0, "class": 0, "id": "quality_control"}, {"betweenness": 2.8571428571428577, "class": 2, "id": "engineer_unspec"}, {"betweenness": 0.0, "class": 0, "id": "i_and_c_tech"}, {"betweenness": 0.0, "class": 0, "id": "transmission_system_OP"}, {"betweenness": 0.0, "class": 0, "id": "assistant_shift_sup"}, {"betweenness": 0.0, "class": 0, "id": "technician_unspec"}, {"betweenness": 0.0, "class": 0, "id": "analysts_unspec"}, {"betweenness": 0.0, "class": 0, "id": "operations_sup"}, {"betweenness": 0.0, "class": 0, "id": "shift_technical_advisor"}, {"betweenness": 0.0, "class": 0, "id": "independent_system_OP"}, {"betweenness": 0.0, "class": 0, "id": "outage_manager"}, {"betweenness": 0.0, "class": 0, "id": "worker_unspec"}, {"betweenness": 0.0, "class": 0, "id": "procedure_writer"}, {"betweenness": 0.0, "class": 1, "id": "control_room_sup"}, {"betweenness": 0.0, "class": 0, "id": "fire_shift_CPT"}, {"betweenness": 0.0, "class": 0, "id": "radiation_protection_tech"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_sup"}, {"betweenness": 0.0, "class": 0, "id": "team_lead"}, {"betweenness": 0.0, "class": 0, "id": "licensed_OP"}, {"betweenness": 0.0, "class": 0, "id": "control_room_OP"}, {"betweenness": 0.0, "class": 0, "id": "chem_tech"}, {"betweenness": 12.38095238095238, "class": 4, "id": "tech_unspec"}, {"betweenness": 0.0, "class": 0, "id": "electrician"}, {"betweenness": 0.0, "class": 0, "id": "Work_control_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "operations_manager"}, {"betweenness": 43.80952380952381, "class": 1, "id": "supervisor_unspec"}, {"betweenness": 0.0, "class": 0, "id": "rp_tech"}, {"betweenness": 2.8571428571428577, "class": 0, "id": "maintenance_WKR"}, {"betweenness": 17.142857142857142, "class": 1, "id": "shift_manager"}, {"betweenness": 0.0, "class": 0, "id": "resident_inspector"}], "links": [{"weight": 2, "source": "reactor_OP", "target": "operator_unspec"}, {"weight": 1, "source": "reactor_OP", "target": "CR_supervisor"}, {"weight": 1, "source": "plant_manager", "target": "plant_manager"}, {"weight": 1, "source": "engineers_unspec", "target": "operators_unspec"}, {"weight": 2, "source": "engineers_unspec", "target": "contractor_nonlicensed"}, {"weight": 6, "source": "engineers_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "s_reactor_operator", "target": "tech_unspec"}, {"weight": 1, "source": "s_reactor_operator", "target": "operator_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "operator_unspec"}, {"weight": 1, "source": "mechanic_unspec", "target": "operator_unspec"}, {"weight": 3, "source": "shift_supervisor", "target": "operator_unspec"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "contractor_nonlicensed"}, {"weight": 3, "source": "operator_trainee_unspec", "target": "operator_unspec"}, {"weight": 2, "source": "operators_unspec", "target": "operators_unspec"}, {"weight": 3, "source": "operators_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "assistant_shift_sup"}, {"weight": 2, "source": "operators_unspec", "target": "maintenance_WKR"}, {"weight": 1, "source": "operators_unspec", "target": "quality_control"}, {"weight": 1, "source": "operators_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "control_room_OP"}, {"weight": 1, "source": "CR_shift_supervisor", "target": "operator_unspec"}, {"weight": 20, "source": "operator_unspec", "target": "operator_unspec"}, {"weight": 3, "source": "operator_unspec", "target": "supervisor_unspec"}, {"weight": 3, "source": "operator_unspec", "target": "control_room_OP"}, {"weight": 3, "source": "operator_unspec", "target": "assistant_shift_sup"}, {"weight": 1, "source": "operator_unspec", "target": "control_room_sup"}, {"weight": 2, "source": "operator_unspec", "target": "shift_manager"}, {"weight": 1, "source": "operator_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "maintenance_WKR"}, {"weight": 2, "source": "shift_technical_advisor", "target": "shift_technical_advisor"}, {"weight": 1, "source": "worker_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "control_room_sup", "target": "control_room_sup"}, {"weight": 1, "source": "electrician", "target": "supervisor_unspec"}, {"weight": 5, "source": "supervisor_unspec", "target": "shift_manager"}, {"weight": 1, "source": "supervisor_unspec", "target": "maintenance_WKR"}, {"weight": 10, "source": "supervisor_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "shift_manager", "target": "resident_inspector"}]}



var svg2_new = d3.select("#svg2_new"),
    width = +svg2_new.attr("width"),
    height = +svg2_new.attr("height");

var simulation2_new = d3.forceSimulation(svg2_new)
    .force("link", d3.forceLink().id(function (d) {
        return d.id;
    }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

d3.json("data2_new", function (error, graph2_new) {

    if (error==true) throw error;

    graph2_new = data2_new;

    var link = svg2_new.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph2_new.links)
        .enter().append("line");

    var node = svg2_new.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph2_new.nodes)
        .enter().append("circle")
        .style("fill", function(d) {
        if (d.class == 1)
        return '#d64b24';
        else if (d.class == 2)
        return '#4b9b23';
        else if (d.class == 3)
        return '#c03bb7';
        else if (d.class == 4)
        return '#46212d';
        else
        return '#008bff';
  })
        .attr("r", function(d) {
        if (d.betweenness >= 20 ){return 15}
        else if (d.betweenness < 20 && d.betweenness >= 16) {return 12}
        else if (d.betweenness < 16 && d.betweenness > 9) {return 10}
        else return d.betweenness + 1.0;
  })
        .call(d3.drag()
            .on("start", dragstarted2_new)
            .on("drag", dragged2_new)
            .on("end", dragended2_new));

    node.append("title")
        .text(function (d) {
            return d.id;
        });

    simulation2_new
        .nodes(graph2_new.nodes)
        .on("tick", ticked);

    simulation2_new.force("link")
        .links(graph2_new.links);

    function ticked() {
        link
            .attr("x1", function (d) {
                return d.source.x;
            })
            .attr("y1", function (d) {
                return d.source.y;
            })
            .attr("x2", function (d) {
                return d.target.x;
            })
            .attr("y2", function (d) {
                return d.target.y;
            });

        node
            .attr("cx", function (d) {
                return d.x;
            })
            .attr("cy", function (d) {
                return d.y;
            });
    }
});

function dragstarted2_new(d) {
    if (!d3.event.active) simulation2_new.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged2_new(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended2_new(d) {
    if (!d3.event.active) simulation2_new.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
