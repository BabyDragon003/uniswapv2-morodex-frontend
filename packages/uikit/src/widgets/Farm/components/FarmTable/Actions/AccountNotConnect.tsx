import { useTranslation } from "@pancakeswap/localization";
import { Text } from "../../../../../components/Text";
import { ActionContent, ActionTitles, StyledActionContainer } from "./styles";

const AccountNotConnect = ({ children }: { children: React.ReactNode }) => {
          {t("Start Farming")}
        </Text>
      </ActionTitles>
      <ActionContent>{children}</ActionContent>
    </StyledActionContainer>
  );
};

export default AccountNotConnect;
