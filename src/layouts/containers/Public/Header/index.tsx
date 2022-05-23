import React from 'react'
import { Col, Button, Row, Avatar } from 'antd'
import Text from '@nexys/components/Typography/Text'
import Link from 'next/link'
import BaseHeader, {
  BaseHeaderProps,
} from '@nexys/components/BaseHeader/BaseHeader'
import Title from '@nexys/components/Typography/Title'

function Header(props: BaseHeaderProps) {
  return (
    <BaseHeader {...props}>
      <Col flex={'none'}>
        <Row>
          <Col style={{ alignSelf: 'center' }}>
            <Link href={'/'}>
              <a>
                <Avatar
                  style={{
                    backgroundColor: '#e21d26',
                  }}
                  size={'large'}
                >
                  <Text bold>NX</Text>
                </Avatar>
              </a>
            </Link>
          </Col>
          <Col>
            <Title noMargin style={{ padding: 6 }} italic>
              Grand Ashoka
            </Title>
          </Col>
        </Row>
      </Col>
      <Col flex={'auto'} style={{ textAlign: 'end' }}>
        <Link href={'#contributors'}>
          <a onClick={() => {
            window.location.replace("whatsapp://send/?phone=+6285234326153&text=Halo Saya ingin bertanya tentang perumahan" );
          }}>
            <Button danger>
              <Text fontFamily={'bold'}>Contact Us</Text>
            </Button>
          </a>
        </Link>
      </Col>
    </BaseHeader>
  )
}

export default Header
