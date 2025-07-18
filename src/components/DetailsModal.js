import React from 'react'
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Header,
    Image,
    Modal,
} from 'semantic-ui-react'

function DetailsModal({ toggleOpen, animalData, isOpen }) {
    const { name, age, gender, timeInShelter, breeds, description, attributes, photos, contact, colors, status, tags } = animalData || {}

    const ContactInfo = ({ contact }) => (
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#f4f4f4', borderRadius: '8px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Contact Info</div>
            {contact?.email && (
                <div>
                    <strong>Email:</strong> {contact.email}
                </div>
            )}
            {contact?.phone && (
                <div>
                    <strong>Phone:</strong> {contact.phone}
                </div>
            )}
            {contact?.address?.address1 && (
                <div>
                    <strong>Address1:</strong> {contact.address.address1}
                </div>
            )}
            {contact?.address?.address2 && (
                <div>
                    <strong>Address2:</strong> {contact.address.address2}
                </div>
            )}
            {contact?.address?.city && (
                <div>
                    <strong>City:</strong> {contact.address.city}
                </div>
            )}
            {contact?.address?.state && (
                <div>
                    <strong>State:</strong> {contact.address.state}
                </div>
            )}
            {contact?.address?.postcode && (
                <div>
                    <strong>Postcode:</strong> {contact.address.postcode}
                </div>
            )}
        </div>
    );

    return (
        <Modal
            onClose={toggleOpen}
            onOpen={toggleOpen}
            open={isOpen}
            size="small"
            centered={false}
            style={{ top: '0%', left: '27%', height: 'fit-content' }}
            closeIcon
        >
            <ModalHeader>
                Learn more about {name}
            </ModalHeader>
            <ModalContent image>
                <Image size="medium" src={photos?.medium} wrapped />
                <ModalDescription>
                    <Header>
                        Time in shelter: {timeInShelter}
                    </Header>
                    <p>{description}</p>
                    {breeds?.primary && (
                        <div>
                            <strong>Breed:</strong> {breeds.primary}
                            {breeds.secondary && ` / ${breeds.secondary}`}
                        </div>
                    )}
                    {gender && (
                        <div>
                            <strong>Gender:</strong> {gender}
                        </div>
                    )}
                    {age && (
                        <div>
                            <strong>Age:</strong> {age}
                        </div>
                    )}
                    {colors?.primary && (
                        <div>
                            <strong>Color:</strong> {colors.primary}
                            {colors.secondary && ` / ${colors.secondary}`}
                            {colors.tertiary && ` / ${colors.tertiary}`}
                        </div>
                    )}
                    {status && (
                        <div>
                            <strong>Status:</strong> {status}
                        </div>
                    )}
                    {tags.length > 0 && (
                        <div>
                            <strong>Tags:</strong> {tags.join(', ')}
                        </div>
                    )}
                    {attributes?.spayed_neutered !== undefined && (
                        <div>
                            <strong>Spayed/Neutered:</strong> {attributes.spayed_neutered ? 'Yes' : 'No'}
                        </div>
                    )}
                    <ContactInfo contact={contact} />

                </ModalDescription>
            </ModalContent>
            <ModalActions>
                <Button color="black" onClick={() => toggleOpen(false)}>
                    Done
                </Button>
            </ModalActions>
        </Modal>
    )
}

export default DetailsModal
