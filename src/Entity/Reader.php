<?php

namespace App\Entity;

use App\Repository\ReaderRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 *
 */
#[ORM\Entity(repositoryClass: ReaderRepository::class)]
class Reader {

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\OneToMany(mappedBy: 'reader', targetEntity: Book::class)]
    private $books;

    public function __construct() {
        $this->books = new ArrayCollection();
    }

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\Column(type: 'string', length: 255, unique: 1)]
    private $mail;

    /**
     * @return int|null
     */
    public function getId(): ?int {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getName(): ?string {
        return $this->name;
    }

    /**
     * @param string $name
     * @return $this
     */
    public function setName(string $name): self {
        $this->name = $name;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getMail(): ?string {
        return $this->mail;
    }

    /**
     * @param string $mail
     * @return $this
     */
    public function setMail(string $mail): self {
        $this->mail = $mail;
        return $this;
    }

    /**
     * @return Collection|Books[]
     */
    public function getBooks(): Collection {
        return $this->books;
    }

    /**
     * Add a book
     * @param Book $book
     * @return $this
     */
    public function addBook(Book $book): self {

        if (!$this->books->contains($book)) {
            $this->books[] = $book;
            $book->setReader($this);
        }

        return $this;
    }

    /**
     * Delete a book
     * @param Book $book
     * @return $this
     */
    public function removeBook(Book $book): self {

        if ($this->books->removeElement($book)) {

            if ($book->getReader() === $this) {
                $book->setReader(null);
            }
        }

        return $this;
    }

}
