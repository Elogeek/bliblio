<?php

namespace App\Entity;

use App\Repository\BookRepository;
use Doctrine\DBAL\Types\DateType;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\Validator\Constraints\DateTime;

#[ORM\Entity(repositoryClass: BookRepository::class)]
class Book
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $picture;

    #[ORM\Column(type: 'string', length: 255)]
    private $author;

    #[ORM\Column(type: 'date')]
    private $date;

    #[ORM\Column(type: 'text', nullable: true)]
    private $description;

    #[ORM\ManyToOne(targetEntity: Borrower::class, inversedBy: 'book', cascade: ['remove'])]
    #[ORM\JoinColumn(name: "borrowerID", referencedColumnName: "id", onDelete: "CASCADE")]
    private $borrower;

    #[ORM\Column(type: 'date', nullable: true)]
    private $reserved;

    #[ORM\Column(type: 'date', nullable: true)]
    private $recovery;

    #[ORM\ManyToOne(targetEntity: Category::class, inversedBy: 'book', cascade: ['remove'])]
    #[ORM\JoinColumn(name: "categoryID", referencedColumnName: "id", onDelete: "CASCADE")]
    private $category;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return $this
     */
    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getPicture(): ?string
    {
        return $this->picture;
    }

    /**
     * @param string|null $picture
     * @return $this
     */
    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getAuthor(): ?string
    {
        return $this->author;
    }

    /**
     * @param string $author
     * @return $this
     */
    public function setAuthor(string $author): self
    {
        $this->author = $author;
        return $this;
    }

    /**
     * @return \DateTime|null
     */
    public function getDate(): ?\DateTime
    {
        return $this->date;
    }

    /**
     * @param \DateTime|null $date
     * @return $this
     */
    public function setDate(?\DateTime $date): self
    {
        $this->date = $date;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * @param string|null $description
     * @return $this
     */
    public function setDescription(?string $description): self
    {
        $this->description = $description;
        return $this;
    }

    /**
     * @return Borrower|null
     */
    public function getBorrower(): ?Borrower
    {
        return $this->borrower;
    }

    /**
     * @param Borrower|null $borrower
     * @return $this
     */
    public function setBorrower(?Borrower $borrower): self
    {
        $this->borrower = $borrower;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getReserved() : ?\DateTime
    {
        return $this->reserved;
    }

    /**
     * @param mixed $reserved
     */
    public function setReserved(?\DateTime $reserved): self
    {
        $this->reserved = $reserved;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getRecovery(): ?\DateTime
    {
        return $this->recovery;
    }

    /**
     * @param mixed $recovery
     */
    public function setRecovery(?\DateTime $recovery): self
    {
        $this->recovery = $recovery;
        return $this;
    }

    /**
     * @return Category|null
     */
    public function getCategory(): ?Category
    {
        return $this->category;
    }

    /**
     * @param Category|null $category
     * @return $this
     */
    public function setCategory(?Category $category): self
    {
        $this->category = $category;
        return $this;
    }

}
