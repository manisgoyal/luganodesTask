## Luganodes Task Documentation

My Registration Number is 20BCE2849. So, my task was (2849 % 4) + 1 = **Task 2**

![Header Image](/screenshots/headerImage.png?raw=true "Header Image")

### Create a Total Stake Counter for Cardano, Polkadot, and Kusama Chains

I have made the whole web to be responsive with the use of Bootstrap. Whwn thw app loads for the first time, all the three chains are displayed. The user is provided the option to remove each of the chains and to update them as well. If the user removes a particular chain, the chain is not shown in the screen. They get an option to add these chains back to the track log or remove others as well. When the user adds the chain back, the data gets updated and the user can track them.

#### Technology Stack:

- Front-end: React.js
- Back-end: Node.js, Express.js
- Database: MongoDB

#### API Used

- *Cardano* : Koios API with `Luganodes Stake Address`
- *Polkadot* and *Kusama* : Subscan API with `Luganodes Stash Addresses`

#### Deployment Links

- *Frontend* : [FrontEnd Deployment Link](https://manisgoyalluganodestask2.onrender.com/)
- *Backend* : [BackEnd Deployment Link](https://luganodes-backend-y3y3.onrender.com)

#### API Routes

All backend API routes start at the endpoint `/api/stake/`

##### Get All

`/all`
---
Response Example - Get the Current Total Stake with details
```json
{
    "Cardano": {
        "totalStake": 64844.710495,
        "updatedAt": "2023-08-02T11:21:06.474Z"
    },
    "Polkadot": {
        "totalStake": 2161.5637145496,
        "updatedAt": "2023-08-02T11:18:14.085Z"
    },
    "Kusama": {
        "totalStake": 23.190741398569,
        "updatedAt": "2023-08-02T11:20:27.140Z"
    }
}
```

##### Get Cardano
`/cardona`
---
Response Example - Get the Current Total Stake for Cardano
```json
{
    "newTotalStake": 64844.710495
}
```

##### Get Polkadot
`/polkadot`
---
Response Example - Get the Current Total Stake for Polkadot
```json
{
    "newTotalStake": "2161.5637145496"
}
```

##### Get Kusama
`/kusama`
---
Response Example - Get the Current Total Stake for Kusama
```json
{
    "newTotalStake": "23.190741398569"
}
```
#### Frontend Screenshots

![Computer Image](/screenshots/desktopMain.png?raw=true "Computer Image")
<br/>
<b style="text-align: center;">When you open the site on desktop</b>

![Mobile Image](/screenshots/mobileMain.png?raw=true "Mobile Image")
<br/>
<b style="text-align: center;">When you open the site on phone</b>

![After Removal](/screenshots/afterRemoval.png?raw=true "Removal")
<br/>
<b style="text-align: center;">Removal Demonstration</b>

![Adding Options](/screenshots/addingOptions.png?raw=true "Addition")
<br/>
<b style="text-align: center;">Addition Demonstration</b>

![Adding Options](/screenshots/updateDemo.png?raw=true "Update")
<br/>
<b style="text-align: center;">Update Demonstration</b>

#### Requirements Tracker

- [x] Implement a web-based UI for the Total Stake Counter.
- [x] The UI should display the total stake value for each chain (Cardano, Polkadot, and Kusama).
- [x] Find the relevant APIs to fetch the total stake data for each chain. Do not perform web-scraping from external explorers.
- [x] Provide options in the UI to add and remove chains (among Cardano, Polkadot, and Kusama) from the tracking list.
- [x] Ensure the application is responsive, user-friendly, and visually appealing.
- [x] Use appropriate frameworks and libraries to simplify development (e.g., React, Vue, Angular, etc.).
- [x] Use version control (e.g., Git) to track changes and share the final codebase.
- [x] Get a docker working for it

#### How to run the app locally

Both the frontend and the backend of the code are in the same repository. For the smooth working, you have to start the backend first. Before running the project, ensure that you have `node` installed on your computer.

Clone this repo first using the command:
```
git clone https://github.com/manisgoyal/luganodesTask
```

>If you need an implementation without docker. I have written a documentaton for that as well. Tbh, I wrote it when the submission deadline was 6:00 pm. I got the docker working now.

>[Click for Non-Docker Implementation - noDocker Branch](https://github.com/manisgoyal/luganodesTask/tree/noDocker)

##### Backend

Now start with the backend. You can **leave the backend as it is** or **change the environment variables**.
- If you want, you can change the environment variables in `.env` file. I have provided the .env file as well for subsequent testing. You can use your own values. The following values are in the file.
```
    MONGODB_URI
    SUBSCAN_APIKEY
    LUGANODES_CARDANO_STAKEADD
    LUGANODES_POLKADOT_STASHADD
    LUGANODES_KUSAMA_STASHADD
```

##### Frontend

No, changes are needed to be made in the frontend.

##### Running the app

Make sure you have `docker` installed in your system. 
```
    > docker-compose up --build
```

Run the command to build the image. 

> I could have uploaded the whole image but the size of the application of enormous. Please wait for 10 min meanwhile go through the build and go through the render implementation.

![Docker Size](/screenshots/dockerProof.png?raw=true "Docker Size")
<br/>
<b style="text-align: center;">Large Docker Size </b>

This is how you can run the application on your device.

#### Explaining the Working of the Code

Initially all of the blockchains are tracked. Now for the objects that should not be tracked, we can click the cross button on the top right side of the card. Then this untracked blockchain name is added to the `notrack` list and becomes untraceable. Additionally, we have included a drop-down menu with selectable options to retain the non-tracked blockchains. Each blockchain display card features an update icon as well to modify the current stake value of the blockchain.


