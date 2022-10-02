import { TopLevelDialogNames } from "@/components/TopLevelDialogs";
import { useRouter } from "next/router";

const useDialog = (dialogName?: string) => {
  const { push, pathname, query, replace } = useRouter();
  const isOpen = query.dialog === dialogName || false;

  const onClose = (queries = {}) => {
    const nextQuery = { ...query };
    delete nextQuery.dialog;

    for (const queryName of Object.keys(queries)) {
      delete nextQuery[queryName];
    }

    replace({ pathname, query: nextQuery }, undefined, { scroll: false });
  };

  const openDialog = (queries = {}) => {
    if (!dialogName) return;
    push(
      { pathname, query: { ...query, dialog: dialogName, ...queries } },
      undefined,
      {
        scroll: false,
      }
    );
  };

  const openTopLevelDialog = (topLevelDialogName: TopLevelDialogNames) => {
    if (!topLevelDialogName) return;
    push({
      pathname,
      query: { ...query, dialog: topLevelDialogName },
    });
  };

  return { onClose, openDialog, openTopLevelDialog, isOpen, query };
};

export default useDialog;
