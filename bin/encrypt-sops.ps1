[CmdletBinding()]
param (
    [Parameter()]
    [ValidateSet('ssh-pk')]
    [string]
    $file
)

switch ($file) {

    ssh-pk {
        Write-Output "Encrypting $file"
        sops -e .github/secrets/ssh-pk.raw.pem > .github/secrets/ssh-pk.enc.pem
    }
}


