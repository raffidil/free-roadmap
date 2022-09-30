import type { Components } from "@mui/material/styles";
// import { ChevronIcon } from "../components/Icon";
import { alpha } from "@mui/system";
import theme from "./theme";
import React from "react";

const listItemRootConfig = {
  "&.Mui-selected": {
    backgroundColor: alpha(
      theme.palette.info.main,
      theme.palette.action.selectedOpacity
    ),
    "&.Mui-focusVisible": {
      backgroundColor: alpha(
        theme.palette.info.main,
        theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity
      ),
    },
  },
  "&.Mui-selected:hover": {
    backgroundColor: alpha(
      theme.palette.info.main,
      theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity
    ),
    "@media (hover: none)": {
      backgroundColor: alpha(
        theme.palette.info.main,
        theme.palette.action.selectedOpacity
      ),
    },
  },
};

const MuiComponentsConfig: Components = {
  MuiPaginationItem: {
    styleOverrides: {
      root: {
        "&.Mui-selected": {
          backgroundColor: theme.palette.common.neutral.white,
          boxShadow: theme.shadows[1],
        },
      },
    },
    // defaultProps: {
    //   components: {
    //     previous: () => <ChevronIcon dir="left" />,
    //     next: () => <ChevronIcon />,
    //   },
    // },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        textTransform: "none",
        "&.Mui-focusVisible": {
          outline: `2px solid ${theme.palette.common.grey[500]}`,
        },
      },
    },
  },
  MuiButton: {
    variants: [
      {
        style: {
          backgroundColor: theme.palette.common.neutral.white,
          color: theme.palette.text.contrast,
        },
        props: {
          variant: "contained",
          color: "info",
        },
      },
    ],
    styleOverrides: {
      root: {
        textTransform: "none",
        paddingTop: "12px",
        paddingBottom: "12px",
        "&.MuiButton-containedInfo:hover": {
          backgroundColor: alpha(
            theme.palette.common.grey[400],
            theme.palette.action.selectedOpacity
          ),
          "@media (hover: none)": {
            backgroundColor: "transparent",
          },
        },
      },
      sizeSmall: {
        padding: "8px",
        ...theme.typography.button,
      },
    },
  },
  MuiIconButton: {
    variants: [
      {
        style: {
          backgroundColor: theme.palette.common.neutral.white,
          boxShadow: theme.shadows[1],
        },
        props: {
          color: "info",
        },
      },
    ],
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
        "&.MuiIconButton-colorInfo:hover": {
          backgroundColor: theme.palette.common.neutral.white,
          boxShadow: theme.shadows[3],
          "@media (hover: none)": {
            backgroundColor: "transparent",
          },
        },
        "&.MuiIconButton-colorInfo.Mui-disabled": {
          backgroundColor: theme.palette.common.neutral.white,
        },
      },
    },
  },
  MuiMenu: {
    defaultProps: {
      elevation: 3,
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: listItemRootConfig,
    },
  },
  MuiSelect: {
    defaultProps: {
      MenuProps: {
        PaperProps: { elevation: 4 },
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: { ...listItemRootConfig },
    },
  },
  MuiBadge: {
    styleOverrides: {
      standard: {
        borderRadius: theme.shape.borderRadius,
        ...theme.typography.body2,
        padding: "2px 8px",
        height: "unset",
        right: "-2px",
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      secondary: { ...theme.typography.caption },
      primary: { ...theme.typography.body1 },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadiusSmall,
        padding: "4px",
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: { padding: "0px", height: "24px", width: "40px" },
      track: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.grey[250],
        opacity: 1,
      },
      switchBase: {
        padding: "4px",
        borderRadius: theme.shape.borderRadius,
        margin: "0px",
        "&.Mui-disabled": {
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.common.grey[250],
            opacity: theme.palette.action.disabledOpacity,
          },
        },
        "&.Mui-checked": {
          color: theme.palette.common.neutral.white,
          transform: "translateX(16px)",
          "&.Mui-disabled": {
            color: theme.palette.common.neutral.white,
            opacity: theme.palette.action.disabledOpacity,
            "& + .MuiSwitch-track": {
              backgroundColor: theme.palette.common.vividMalachite.darker,
              opacity: theme.palette.action.disabledOpacity,
            },
          },
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.common.vividMalachite.darker,
            opacity: 1,
          },
        },
      },
      thumb: {
        width: "16px",
        height: "16px",
        borderRadius: theme.shape.borderRadiusSmall,
        boxShadow: "none",
      },
    },
  },
  MuiRadio: {
    defaultProps: {
      color: "primary",
    },
    styleOverrides: {
      root: {
        '&.Mui-checked [data-testid="RadioButtonCheckedIcon"]': {
          transform: "scale(1.2)",
        },
        '&:not(.Mui-checked) [data-testid="RadioButtonCheckedIcon"]': {
          color: theme.palette.common.neutral.white,
          transform: "scale(1.6)",
        },
        '&:not(.Mui-checked) [data-testid="RadioButtonUncheckedIcon"]': {
          color: theme.palette.divider,
        },
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      standard: {
        borderRadius: theme.shape.borderRadiusSmall,
      },
      standardInfo: {
        backgroundColor: theme.palette.common.grey[50],
        color: theme.palette.text.secondary,
      },
      standardSuccess: {
        backgroundColor: theme.palette.common.vividMalachite.lighter,
        color: theme.palette.common.vividMalachite.darker,
      },
      standardError: {
        backgroundColor: theme.palette.common.red.lighter,
        color: theme.palette.common.red.medium,
      },
      standardWarning: {
        backgroundColor: theme.palette.common.orange.lighter,
        color: theme.palette.common.orange.medium,
      },
      icon: {
        color: "inherit !important",
      },
    },
  },
  MuiBottomNavigation: {
    styleOverrides: {
      root: {
        height: theme.mixins.bottomNavigation.height,
      },
    },
  },
  MuiBottomNavigationAction: {
    styleOverrides: {
      root: {
        minWidth: "unset",
        padding: "6px 6px 8px",
        height: theme.mixins.bottomNavigation.height,
        color: theme.palette.text.secondary,
        "&.Mui-selected": {
          color: theme.palette.text.primary,
        },
      },
      label: {
        "&.Mui-selected": {
          fontSize: "0.75rem",
          fontWeight: 600,
        },
      },
    },
  },
  MuiChip: {
    defaultProps: { variant: "standard", color: "primary" },
    styleOverrides: {
      sizeMedium: {
        padding: 10,
        height: 40,
        borderRadius: 24,
      },
      sizeSmall: {
        padding: "4px 8px",
        height: 28,
        borderRadius: 18,
      },
      label: { padding: 0 },
      labelMedium: { ...theme.typography.body1 },
      labelSmall: { ...theme.typography.body2 },
      colorPrimary: {
        backgroundColor: theme.palette.common.grey[400],
        color: theme.palette.text.contrast,
      },
      colorSecondary: {
        backgroundColor: theme.palette.common.grey[150],
        color: theme.palette.text.secondary,
      },
    },
    variants: [
      {
        props: { variant: "filled", color: "success" },
        style: {
          backgroundColor: theme.palette.common.vividMalachite.dark,
          color: theme.palette.text.contrast,
        },
      },
      {
        props: { variant: "filled", color: "error" },
        style: {
          backgroundColor: theme.palette.common.red.medium,
          color: theme.palette.text.contrast,
        },
      },
      {
        props: { variant: "standard", color: "primary" },
        style: {
          backgroundColor: theme.palette.common.neutral.white,
          color: theme.palette.text.primary,
        },
      },
      {
        props: { variant: "standard", color: "secondary" },
        style: {
          backgroundColor: theme.palette.common.grey[150],
          color: theme.palette.text.secondary,
        },
      },
      {
        props: { variant: "standard", color: "success" },
        style: {
          backgroundColor: theme.palette.common.vividMalachite.lighter,
          color: theme.palette.common.vividMalachite.dark,
        },
      },
      {
        props: { variant: "standard", color: "error" },
        style: {
          backgroundColor: theme.palette.common.red.lighter,
          color: theme.palette.common.red.medium,
        },
      },
      {
        props: { variant: "outlined", color: "primary" },
        style: {
          backgroundColor: theme.palette.common.neutral.white,
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
      {
        props: { variant: "outlined", color: "info" },
        style: {
          backgroundColor: theme.palette.common.neutral.white,
          color: theme.palette.text.primary,
          borderColor: theme.palette.common.grey[150],
        },
      },
      {
        props: { color: "info" },
        style: {
          color: theme.palette.text.primary,
        },
      },
    ],
  },
  MuiTable: {
    styleOverrides: {
      root: { width: "auto" },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: { padding: "0px 12px 12px 12px", borderBottom: "none" },
      body: {
        ...theme.typography.subtitle1,
        // height: 36
      },
      head: {
        ...theme.typography.subtitle2,
        color: theme.palette.text.secondary,
        paddingBottom: 16,
      },
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      toolbar: {
        justifyContent: "center",
      },
      spacer: { flex: 0 },
    },
  },
  MuiModal: {
    styleOverrides: {
      root: {
        "&.MuiDialog-root .MuiBackdrop-root": {
          backgroundColor: alpha(theme.palette.common.neutral.black, 0.4),
        },
      },
    },
  },
  MuiDialog: {
    defaultProps: {
      PaperProps: {
        elevation: 4,
      },
    },
    styleOverrides: {
      paper: {
        borderRadius: theme.shape.borderRadiusSmall,
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: "12px 16px",
        ...theme.typography.subtitle1,
        color: theme.palette.text.primary,
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: "12px 16px",
      },
    },
  },
  MuiDialogContentText: {
    defaultProps: { color: theme.palette.text.primary },
  },
  MuiFilledInput: {
    defaultProps: {
      disableUnderline: true,
    },
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
      },
      input: {
        padding: "8px 16px",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.common.neutral.white,
        ...theme.typography.body1,
        "&:not(.Mui-focused):not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline":
          {
            borderColor: theme.palette.common.blue.light,
            borderWidth: "2px",
          },
        "&:not(.Mui-focused):not(.Mui-disabled).Mui-error:hover .MuiOutlinedInput-notchedOutline":
          {
            borderColor: theme.palette.common.red.light,
            borderWidth: "2px",
          },
      },
      notchedOutline: {
        borderColor: theme.palette.common.grey[200],
        padding: "16px 12px",
      },
      input: {
        "&:not(.MuiInputBase-inputMultiline)": {
          padding: "16px 12px",
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        ...theme.typography.subtitle2,
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: theme.palette.text.secondary,
        "&[data-shrink='true']": {
          marginLeft: "4px",
          transform: "translate(14px, -9px) scale(0.9)",
          ...theme.typography.subtitle2,
          // transform: "translate(0px, -24px) scale(1)",
          // "&:not(.Mui-focused).MuiFormLabel-filled": {
          //   color: theme.palette.text.primary,
          // },
        },
      },
    },
  },

  MuiStepButton: {
    styleOverrides: {
      root: {
        "& .MuiStepIcon-root": {
          text: {
            ...theme.typography.subtitle2,
          },
        },
        "&.Mui-disabled .MuiStepIcon-root": {
          color: theme.palette.common.grey[150],
          text: {
            fill: theme.palette.text.secondary,
          },
        },
      },
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      line: {
        borderColor: theme.palette.common.grey[200],
        borderWidth: "2px",
      },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      label: {
        ...theme.typography.subtitle2,
        color: theme.palette.text.secondary,
        "&.Mui-active": {
          ...theme.typography.subtitle2,
        },
      },
    },
  },
  MuiSkeleton: {
    styleOverrides: {
      rectangular: {
        borderRadius: theme.shape.borderRadius,
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        height: "2px",
      },
    },
    variants: [
      {
        props: { color: "primary" },
        style: {
          backgroundColor: theme.palette.common.blue.light,
          ".MuiLinearProgress-bar": {
            backgroundColor: theme.palette.common.blue.medium,
          },
        },
      },
      {
        props: { color: "info" },
        style: {
          backgroundColor: theme.palette.common.grey[150],
          ".MuiLinearProgress-bar": {
            backgroundColor: theme.palette.common.grey[300],
          },
        },
      },
    ],
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        marginLeft: "unset",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
        "&.Mui-focusVisible": {
          outline: "none",
          backgroundColor: alpha(
            theme.palette.info.main,
            theme.palette.action.selectedOpacity +
              theme.palette.action.focusOpacity
          ),
        },
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        width: "48px",
        height: "48px",
        backgroundColor: theme.palette.common.grey[100],
        color: theme.palette.common.grey[250],
      },
    },
  },
  MuiAvatarGroup: {
    defaultProps: {
      spacing: "small",
      max: 7,
    },
  },
  MuiRating: {
    styleOverrides: {
      icon: {
        fontSize: 32,
        marginRight: 8,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltipArrow: {
        backgroundColor: theme.palette.common.grey[900],
        color: theme.palette.common.neutral.white,
        padding: "8px 16px",
        maxWidth: 360,
      },
      arrow: {
        color: theme.palette.common.grey[900],
      },
    },
  },
};

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    standard: true;
  }
}

export default MuiComponentsConfig;
