import { useTranslation } from "@pancakeswap/localization";
import { Text } from "../../../../../components/Text";
import { Button } from "../../../../../components/Button";
import { StyledActionContainer, ActionContent, ActionTitles } from "./styles";

interface EnableStakeActionProps {
  pendingTx: boolean;
  handleApprove: () => void;
}

        </Text>
      </ActionTitles>
      <ActionContent>
        <Button width="100%" disabled={pendingTx} onClick={handleApprove} variant="secondary">
          {t("Enable")}
        </Button>
      </ActionContent>
    </StyledActionContainer>
  );
};

export default EnableStakeAction;
