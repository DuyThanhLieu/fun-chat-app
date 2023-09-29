import React from 'react'
import { Row, Col, Button } from 'antd'
// import { GoogleAuthProvider } from 'firebase/auth';
import firebase from '../firebase/config'
import { auth, db } from '../firebase/config'
import Title from 'antd/es/typography/Title'
import { useHistory } from 'react-router-dom'
import { addDocument } from '../firebase/services'


const fbProvider = new firebase.auth.FacebookAuthProvider();


export default function Login() {
    const handleFbLogin = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider)
        if (additionalUserInfo?.isNewUser) {
            addDocument('user', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                provider: additionalUserInfo.providerId,
            })
        }
    }

    return (
        <div>
            <Row justify="center" style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }} level={3}>Fun Chat</Title>
                    <span style={{ marginBottom: 5 }}>Login</span>
                    <Button style={{ width: '100%', marginBottom: 5 }}>Login with Google</Button>
                    <Button style={{ width: '100%' }} onClick={handleFbLogin}>Login with FaceBook</Button>
                </Col>
            </Row>

        </div>
    )
}
