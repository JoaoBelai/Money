import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    despesa: {
        width: "100%",
        backgroundColor: COLORS.grey,
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    containerIcon: {
        flex: 3
    },

    despesaIcon:{
        width: 35,
        height: 35
    },

    containerCategoria:{
        flex: 9
    },

    containerValor: {
        flex: 5
    },

    despesaCategoria:{
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_grey,
        fontWeight: "bold"
    },

    despesaDescricao:{
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_grey,
    },

    despesaValor:{
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_grey,
        fontWeight: "bold",
        textAlign: "right"
    },

}