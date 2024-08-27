import React, { useState } from 'react';
import './CreateGroupPage.css';

const CreateGroupPage = () => {
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [maxMembers, setMaxMembers] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    const groupData = {
      groupName,
      description,
      subject,
      maxMembers,
    };
    console.log(groupData);
    // Here you would typically send the data to your backend server
  };

  return ( // <--- INSERT THE CODE HERE

    <div className="CreateGroupPage-container">
      <h1 style={{fontFamily:'fantasy',fontSize:'50px',fontWeight:'bold',color:'#ff000'}}>Create new Study Group</h1>
      <form onSubmit={handleSubmit} className="CreateGroupPage-form">
        <div style={{ marginBottom: '10px',fontWeight:'bold' }}>
          <label>Group Name:</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
            style={{ width: '20%', padding: '5px',height:'5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px',fontWeight:'bold'}}>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: '20%', padding: '5px',height:'5px' }}
          ></textarea>
        </div>
        <div style={{ marginBottom: '10px',fontWeight:'bold' }}>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            style={{ width: '20%', padding: '5px',height:'5px'  }}
          />
        </div>
        <div style={{ marginBottom: '10px',fontWeight:'bold' }}>
          <label>Max Members:</label>
          <input
            type="number"
            value={maxMembers}
            onChange={(e) => setMaxMembers(e.target.value)}
            required
            style={{ width: '20%', padding: '5px',height:'5px'  }}
            min="2"
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: '#28a745', color: '#fff', border: 'none' }}>
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroupPage;