
export interface leaksData 
    {
        Name: string;
        Title: string;
        Domain: string;
        BreachDate: string;
        AddedDate: string;
        ModifiedDate: string;
        PwnCount: number;
        Description: string;
        DataClasses: string[];
        IsVerified: boolean;
        IsSensitive: boolean;
        IsRetired: boolean;
        IsSpamList: boolean;
    }


export async function fetchLeaksByEmail(): Promise<JSON> {
    const response = await fetch(`https://www.gov.uk/bank-holidays.json`);
    if (!response.ok) {
      throw new Error(await response.json());
    }
    else {
      return await response.json();
    }
  }

export async function fetchSampleLeaksByEmail(): Promise<leaksData[]> {
    return new Promise(function(resolve, reject) {
        resolve(sampleBreachData);
        reject(new Error("Will this be ignored?"))
    })
  }


  const sampleBreachData : leaksData[] = [
    {
    "Name":"Adobe",
    "Title":"Adobe",
    "Domain":"adobe.com",
    "BreachDate":"2013-10-04",
    "AddedDate":"2013-12-04T00:00Z",
    "ModifiedDate":"2022-05-15T23:52Z",
    "PwnCount":152445165,
    "Description":"In October 2013, 153 million Adobe accounts were breached with each containing an internal ID, username, email, <em>encrypted</em> password and a password hint in plain text. The password cryptography was poorly done and many were quickly resolved back to plain text. The unencrypted hints also <a href=\"http://www.troyhunt.com/2013/11/adobe-credentials-and-serious.html\" target=\"_blank\" rel=\"noopener\">disclosed much about the passwords</a> adding further to the risk that hundreds of millions of Adobe customers already faced.",
    "DataClasses":["Email addresses","Password hints","Passwords","Usernames"],
    "IsVerified": true,
    "IsSensitive":false,
    "IsRetired":false,
    "IsSpamList":false
    },
    {
    "Name":"BattlefieldHeroes",
    "Title":"Battlefield Heroes",
    "Domain":"battlefieldheroes.com",
    "BreachDate":"2011-06-26",
    "AddedDate":"2014-01-23T13:10Z",
    "ModifiedDate":"2014-01-23T13:10Z",
    "PwnCount":530270,
    "Description":"In June 2011 as part of a final breached data dump, the hacker collective &quot;LulzSec&quot; <a href=\"http://www.rockpapershotgun.com/2011/06/26/lulzsec-over-release-battlefield-heroes-data\" target=\"_blank\" rel=\"noopener\">obtained and released over half a million usernames and passwords from the game Battlefield Heroes</a>. The passwords were stored as MD5 hashes with no salt and many were easily converted back to their plain text versions.",
    "DataClasses":["Passwords","Usernames"],
    "IsVerified":true,
    "IsSensitive":false,
    "IsRetired":false,
    "IsSpamList":false
    }
    ]