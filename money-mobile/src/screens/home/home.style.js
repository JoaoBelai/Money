import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        padding: 20
    },

    logo: {
        width: 100,
        height: 30
    },

    dashboard: {
        width: "100%",
        backgroundColor: COLORS.blue,
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    dashboardValor:{
        color: COLORS.white,
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold"
    },

    dashboardText:{
        color: COLORS.white,
        fontSize: FONT_SIZE.md
    },

    dashboardImg:{
        width: 35,
        height: 60
    },

    despesasTitulo:{
        fontSize: FONT_SIZE.mdd,
        color: COLORS.dark_grey,
        marginTop: 15,
        fontWeight: "bold"
    },
    
    btnAdd:{
        position: "absolute",
        bottom: 12
    },
    
    btnAddImage:{
        width: 65,
        height: 65
    },

}