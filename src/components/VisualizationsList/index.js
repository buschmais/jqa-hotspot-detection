import React from "react";
import { connect } from "react-redux";
import VisualizationsListItem from "../VisualizationsListItem";
import styled from 'styled-components'

const CustomTable = styled.table`
  &&& {
    table,th,td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th,td,tr {
      padding: 5px;
    }
    th {
      text-align: left;
    }
    table {
      width: 100%;
    }
  }
`;

const VisualizationsList = ({ visualizations }) => (
  <CustomTable>
    <thead>
    <script>
        <td>
            Status
        </td>
        </script>
        <td>
            Titel
        </td>

        <td>
            Input-Kategorie
        </td>
        <td>
            Output-Kategorie
        </td>
         <td>
            Visualisierungstyp
         </td>

    </thead>
    <tbody>
    {
    visualizations.allIds && visualizations.allIds.length
      ? visualizations.allIds.map((id) => visualizations.byIds[id]).map((visualizations, index) => {
          return <VisualizationsListItem key={`visualizations-${visualizations.id}`} visualizations={visualizations} />;
        })
      : "Noch keine Visualisierung vorhanden."
    }
    </tbody>
  </CustomTable>
);

const mapStateToProps = state => {
  return { visualizations: state.visualizations };
};

export default connect(mapStateToProps)(VisualizationsList);
