import * as React from 'react';
import AppNavigation from "./AppNavigation.showcase";
import Header from "../../Component/Card/Header";
import Layout from "../../Component/App/Layout";
import { Button, Card, CardContent, Container } from "@mui/material";
import { useIntl } from "react-intl";

const TriggerIntlError: React.FC = () => {
  const { formatMessage } = useIntl()
  const triggerIntlError = () => {
    formatMessage(
      { id: 'non.existent.translation.key.triggers.an.error' },
      { default: '... even when providing a default' }
    )
  }
  return (
    <Layout navigation={<AppNavigation/>}>
      <Container disableGutters maxWidth={false}>
        <Card>
          <Header title={'Intl Error Handler'}/>
          <CardContent>
            <Button variant='contained' onClick={triggerIntlError} title='Trigger Intl Error'>
              Trigger Intl Error
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  )
}

export default React.memo(TriggerIntlError)
