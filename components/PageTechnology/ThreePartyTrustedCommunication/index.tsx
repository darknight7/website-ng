import React from 'react'
import { CardContentProps } from '../../Card/CardContent'
import { CardHeaderProps } from '../../Card/CardHeader'
import I18n from '../../I18n'
import Card from '../../Card'
import styles from './index.module.scss'

type Props = CardHeaderProps & CardContentProps

const ThreePartyTrustedCommunication: React.FC<Props> = (props) => {
  const content = {
    en: `We have completed the construction and operation of the TEE network through the three-party trusted communication between “TEE-Blockchain-Client”. All TEE devices need to register on the blockchain with their own remote authentication report. When the TEE synchronizes data from the chain, the built-in GRANDPA light client of the TEE will complete the verification and consensus maintenance of the blockchain on the chain. The trusted communication between the user and the TEE is guaranteed by a dedicated password pair generated by the Diffie-Hellman key exchange protocol.`,
    zh:
      '我们通过 “TEE — 区块链 — 客户端” 间的三方可信通信，完成了 TEE 网络的搭建和运转。所有 TEE 设备均需用自己的远程认证报告在区块链上注册，当 TEE 从链上同步数据时 TEE 内搭建的 GRANDPA 轻客户端 会完成对链上区块的验证和共识维护。用户和TEE间的可信通信则通过迪菲-赫尔曼密钥交换协议生成的专属密钥对保证',
  }

  return (
    <Card
      type='vertical'
      cardContentClassName={styles.cardContent}
      firstLetter
      {...props}>
      <I18n {...content}></I18n>
    </Card>
  )
}

export default ThreePartyTrustedCommunication