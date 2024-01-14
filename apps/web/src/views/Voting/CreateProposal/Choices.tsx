import { Button, Card, CardBody, CardHeader, Heading } from '@pancakeswap/uikit'
import uniqueId from 'lodash/uniqueId'
import { useTranslation } from '@pancakeswap/localization'
import Choice from './Choice'

export interface ChoiceIdValue {
  id: string
  value: string
}

interface ChoicesProps {
  choices: ChoiceIdValue[]
  onChange: (newChoices: ChoiceIdValue[]) => void
}

        </Heading>
      </CardHeader>
      <CardBody>
        {choices.map(({ id, value }, index) => {
          const handleTextInput = (newValue: string) => {
            const newChoices = [...choices]
            const choiceIndex = newChoices.findIndex((newChoice) => newChoice.id === id)

            newChoices[choiceIndex].value = newValue

            onChange(newChoices)
          }

          const handleRemove = () => {
            onChange(choices.filter((newPrevChoice) => newPrevChoice.id !== id))
          }

          return (
            <Choice
              key={id}
              scale="lg"
              onTextInput={handleTextInput}
              placeholder={t('Input choice text')}
              value={value}
              onRemove={index > 1 ? handleRemove : undefined}
            />
          )
        })}

        <Button type="button" onClick={addChoice} disabled={!hasMinimumChoices}>
          {t('Add Choice')}
        </Button>
      </CardBody>
    </Card>
  )
}

export default Choices
